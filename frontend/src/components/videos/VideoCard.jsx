import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import '../../css/styles.css';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: '#E3E2DF',
    maxWidth: 130,
    maxHeight: 170,
  },
  // media: {
  //   height: '20%',
  // },
  cardLectures: {},
});

export default function VideoCard({ video, onDeleteClick, currentUser }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <PlayCircleFilledIcon
              style={{
                height: '50%',
                width: '50%',
                color: '#2E9CCA',
                margin: '0',
              }}
            />
          </a>
        </IconButton>

        <CardContent>
          <Typography gutterBottom variant="p" component="p" styles={{}}>
            {`${video.videoName}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      {currentUser.userRole === 'teacher' ? (
        <div className="iconDelete">
          <DeleteIcon onClick={() => onDeleteClick(video)} />
        </div>
      ) : null}
     </Card>
  );
}
