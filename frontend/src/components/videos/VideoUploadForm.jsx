import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  button: {
    margin: theme.spacing(1),
    backgroundColor: '#1391B9',
  },
}));

export default function VideoUploadForm({ onCreateClick, currentUser }) {
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const classes = useStyles();
  console.log('currentuser from videoform : ' + currentUser.name);

  return (
    <>
      <h3>Create a video below</h3>
      <label>Video Upload area</label>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Enter video name"
          variant="filled"
          onChange={(e) => setVideoName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Enter video URL"
          variant="filled"
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </form>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => {
          onCreateClick({ videoName, currentUser, videoUrl });
          setVideoName('');
        }}
      >
        Upload
      </Button>
      <hr />
    </>
  );
}
