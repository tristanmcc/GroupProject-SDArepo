import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../../CSS/videos.css';

import IconButton from '@material-ui/core/IconButton';


import DuoTwoToneIcon from '@material-ui/icons/DuoTwoTone';
//import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    
  },
  media: {
    height: '20%',
  },
  cardLectures: {
   
  }
});



export default function VideoCard({ video, onDeleteClick, currentUser }) {
  console.log('videocard print out: ' + video.videoUrl);
  console.log('currentuser from videocard : ' + currentUser.userRole);

  const classes = useStyles();
 
  return (
  <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <DuoTwoToneIcon
              style={{
                height: 130,
                width: '30%',
                color: '#E55A71',
                margin: '0',
              }}
            />
          </a>
        </IconButton>

        <CardContent className={classes.cardLectures}>
          <Typography gutterBottom variant="h5" component="h2">
            {`${video.videoName}`}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button
        style={{
          height: 60,
          color: 'black',
          backgroundColor: '#E55A71',
          width: '30%',
        }}
        onClick={() => {
          onDeleteClick(video);
        }}
      >
        <DeleteOutlineOutlinedIcon style={{ height: '30%', width: '30%' }} />
      </Button>
    </Card>

    


  );
}
