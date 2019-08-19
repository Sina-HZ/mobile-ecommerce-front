import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';
import { addMobile, editMobile, editCurrent, editModifyFlag } from '../../redux/actions';
import Axios from 'axios';



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems : 'baseline'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
      },
      leftIcon: {
        marginRight: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      iconSmall: {
        fontSize: 20,
      },
  }));

function TextFields(props) {
    const classes = useStyles();
    const {currentMobile} = props;
    const {flags} = props;

    

    const handleChange = name => event => {
      // setValues({ ...values, [name]: event.target.value });
      props.dispatch(editCurrent({[name]: event.target.value}));
    };

    const setClear = () => {
      const clearCurrent = {phone: '',phoneCpu : '',phoneRam : '',phoneCamera : '',phoneBattery : '',phoneImg : '',ImgPreview : ''};
      props.dispatch(editCurrent(clearCurrent));
    }

    const handleFile = name => e => {
      const files = e.target.files[0];
      props.dispatch(editCurrent({ [name]: files }));
    }

    const handleSubmit = e =>{
      e.preventDefault();
      const {phone ,phoneCpu , phoneRam,phoneCamera,phoneBattery, phoneImg} = currentMobile;
      let formdata = new FormData();
      formdata.append('MobileImg',phoneImg);
      formdata.append('phone', phone);
      formdata.append('phoneCpu', phoneCpu);
      formdata.append('phoneRam', phoneRam);
      formdata.append('phoneCamera', phoneCamera);
      formdata.append('phoneBattery', phoneBattery);
    if(flags.modify === false){
      const token = localStorage.getItem('token');
      const formdata = new FormData();
      console.log('Form Data : ',formdata);
      // formdata.append('MobileImg',phoneImg);
      // formdata.append('phone', phone);
      // formdata.append('phoneCpu', phoneCpu);
      // formdata.append('phoneRam', phoneRam);
      // formdata.append('phoneCamera', phoneCamera);
      // formdata.append('phoneBattery', phoneBattery);
      Axios({
        url : 'http://localhost:3030/api/v1/mobile',
        method : 'POST',
        headers : {
          'x-access-token' : token
        },
        data : formdata
      }).then(res => {
        const newResponse = {
          _id : res.data._id,
          name : res.data.name,
          ram : res.data.ram,
          cpu : res.data.cpu,
          camera : res.data.camera,
          battery : res.data.battery,
          image : res.data.image.url
        }
        console.log('response',res);
          props.dispatch(  
            addMobile(newResponse), 
          );
          setClear();
          })
    }else{
      const token = localStorage.getItem('token');
      console.log('Form Data : ',formdata);
      // const {phone ,phoneCpu , phoneRam,phoneCamera,phoneBattery, phoneImg,phoneId} = currentMobile;
      // let formdataEdit = new FormData();
      // formdataEdit.append('MobileImg',currentMobile.phoneImg);
      // formdataEdit.append('phone', currentMobile.phone);
      // formdataEdit.append('phoneCpu', currentMobile.phoneCpu);
      // formdataEdit.append('phoneRam', currentMobile.phoneRam);
      // formdataEdit.append('phoneCamera', currentMobile.phoneCamera);
      // formdataEdit.append('phoneBattery', currentMobile.phoneBattery);
      Axios({
        url : 'http://localhost:3030/api/v1/mobile/' + currentMobile.phoneId,
        method : 'PUT',
        headers : {
          'x-access-token' : token
        },
        data : {
          phone : currentMobile.phone,
          phoneCpu : currentMobile.phoneCpu,
          phoneRam : currentMobile.phoneRam,
          phoneBattery : currentMobile.phoneBattery,
          phoneCamera : currentMobile.phoneCamera,
          MobileImg : currentMobile.phoneImg,
        }
      }).then(res => {
        console.log('info of response',res.data);
        const newResponse = {
          _id : res.data._id,
          name : res.data.name,
          ram : res.data.ram,
          cpu : res.data.cpu,
          camera : res.data.camera,
          battery : res.data.battery,
          image : res.data.image.url
        }
        props.dispatch(
          editMobile(newResponse)
        );
        setClear()
        props.dispatch(editModifyFlag({
          modify : false, 
          formButton : "primary",
          formButtonTittle : "Add New"
        }));
      })
      .catch(err => {
        console.log(err)
      })
      
    }
  }

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="mobile-name"
          label="mobile name"
          className={classes.textField}
          value={currentMobile.phone}
          onChange={handleChange('phone')}
          margin="normal"
        />
        <TextField
          id="cpu-value"
          label="CPU"
          className={classes.textField}
          value={currentMobile.phoneCpu}
          onChange={handleChange('phoneCpu')}
          margin="normal"
        />
        <TextField
          id="ram-value"
          label="Ram"
          className={classes.textField}
          value={currentMobile.phoneRam}
          onChange={handleChange('phoneRam')}
          margin="normal"
        />
        <TextField
          id="battery-value"
          label="Battery"
          className={classes.textField}
          value={currentMobile.phoneBattery}
          onChange={handleChange('phoneBattery')}
          margin="normal"
        />
        <TextField
          id="camera-value"
          label="Camera"
          className={classes.textField}
          value={currentMobile.phoneCamera}
          onChange={handleChange('phoneCamera')}
          margin="normal"
        />
       <input type="file" onChange={handleFile('phoneImg')} name="phoneImg" id="picture-up" style={{display : 'none'}} />
        <label htmlFor="picture-up">
            <Button variant="contained" component="span" color="default" className={classes.button}>   
                Upload
                <CloudUploadIcon className={classes.rightIcon} />
            </Button>
        </label>
        <Button variant="contained" id="Admin-submit-button" color={flags.formButton} onClick={handleSubmit} className={classes.button}>
          {flags.formButtonTittle}
        </Button>
      </form>
    );
  }

  const mapStateToProps = state => {
    return {
      currentMobile : state.currentMobile,
      flags : state.flags
    }
  }
  export default connect(mapStateToProps)(TextFields);

  