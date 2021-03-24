import React, { useState } from 'react'
import Input from 'components/CustomInput/CustomInput'
import Button from 'components/CustomButton/CustomButton'
import { Grid, TextField, Typography } from '@material-ui/core'
import {useDropzone} from 'react-dropzone';
import dropzoneLogo from 'assets/logo/drop-zone-icon.png'
import { useSelector, useDispatch } from 'react-redux';
import {notificationError} from 'store/notification'
import {addGroup} from 'store/group'
import {useNavigate} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  
const BreadCrumb = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>   
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="#">
              Student Groups
            </Link>
            <Typography color="textPrimary" >+ New</Typography>
          </Breadcrumbs>
        </div>
      );
}

const Header = ({addGroupHandler, groupName, setGroupName}) => {
    return (
        <>
        <Grid container alignItems="center" >
            <Grid item xs={12} style={{marginBottom: 50}}>
                <BreadCrumb />
                <Typography variant="h6">Create a new group</Typography>
            </Grid>
            <Grid item xs={10}  >
                <Input
                    label="Group Name"
                    background="blueDark"
                    value={groupName}
                    onChange={(e)=>setGroupName(e.target.value)}
                />
            </Grid>
            <Grid item container justify="space-around" xs={2} >
                <Button
                    text="+ Add Group"
                    background="white"
                    border="borderBlue"
                    onClick={addGroupHandler}
                />
            </Grid>
        </Grid>
        
        </>
    )
}

const DropZone = ({ acceptedFiles, getRootProps, getInputProps}) => {
    const files = acceptedFiles.map(file => (
      <div style={{border:'1px solid rgba(0,0,0,0.3)', padding:20, marginTop: 20, marginBottom: 20, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '10px'}} key={file.path}>
        {file.path} - {file.size} bytes
      </div> 
    ));
  
    return (
      <section className="container" >
        <div {...getRootProps({className: 'dropzone'})} 
        style={{
            outline: 'none',
            border:acceptedFiles.length <= 0 ? '1px solid #000' : '1px solid #394AAB',
            height:'50vh',
            display: 'flex', 
            justifyContent: "center", 
            alignItems: 'center',
            borderRadius: '10px'
            }}>
          <input {...getInputProps()}  />
          <div 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'}}
          >
            <img src={dropzoneLogo} width={80} />
            <p style={{textAlign:'center'}}>Upload list of students with .csv extension in the format <br/>
                (name, roll_no, email, mobile_no)
            </p>
          </div>
          
        </div>
        <aside >
          {files}
        </aside>
      </section>
    );
}

const OtherGroups = () => {
    const groups = useSelector(store => store.group.groups)
    return (
      <Grid >
        <Typography>Your other groups</Typography>
        {groups.map((group) => {
          return (
            <Button
              key={group.id}
              text={group.group_name}
              background="backgroundBlueLight"
              color="white"
              to={`../id=${group.id}`}
            />
          );
        })}
      </Grid>
    );
  };

  const Footer = () => {
      return  <Typography align="center">Designed and developed by DeepInderX</Typography>
  }

export default function AddGroup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({maxFiles: 1, accept: '.csv'});
    const [groupName, setGroupName] = useState("")
    const admin_id = useSelector(store => store.auth.user.access_key.admin_id)
    const college_id = useSelector(store => store.auth.user.college.id)

    const addGroupHandler = () => {
        if(acceptedFiles.length !== 1){
            dispatch(notificationError('Please Select File'))
            return;
        }
        if(groupName.trim() === ""){
            dispatch(notificationError('Enter valid Group Name'))
            return
        }

        const fd = new FormData();
        fd.append('admin_id', admin_id)
        fd.append('college_id', college_id)
        fd.append('group_name', groupName)
        fd.append('student_list', acceptedFiles[0])
        dispatch(addGroup(fd))
        .then(group => navigate(`/admin/dashboard/group/id=${group.id}`, {replace: true})).catch()
    }
    return (
        <Grid style={{paddingRight: 200, position: 'relative', height: '90vh'}}>
            <Grid style={{marginBottom: 30}}>
                <Header addGroupHandler={addGroupHandler} setGroupName={setGroupName} groupName={groupName}/>
            </Grid>
            <Grid style={{marginBottom: 30}}>
                <DropZone acceptedFiles={acceptedFiles} getRootProps={getRootProps} getInputProps={getInputProps}/>
            </Grid>
            <OtherGroups />
            <div style={{ position: 'absolute', bottom: '0px', width:'100%',   }}>
                <Footer  />
            </div>
        </Grid>
    )
}
