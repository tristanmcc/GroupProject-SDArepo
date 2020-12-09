import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../../CSS/videos.css';

import DuoTwoToneIcon from '@material-ui/icons/DuoTwoTone';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundColor: '#6AD1FA',
    textAlign: 'center',
  },
  media: {
    height: 20,
  },
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
                width: '100%',
                color: '#E55A71',
                margin: '0',
              }}
            />
          </a>
        </IconButton>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${video.videoName}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      {currentUser.userRole === 'teacher' ? (
      <button
        style={{
          height: 60,
          color: 'black',
          backgroundColor: '#E55A71',
          width: '100%',
        }}
        onClick={() => {
          onDeleteClick(video);
        }}
      >
        <DeleteOutlineOutlinedIcon style={{ height: 60, width: '100%' }} />
      </button>
      ) : null}
    </Card>
  );
}
