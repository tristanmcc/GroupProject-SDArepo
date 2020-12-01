import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function CourseForm({ initialTitle, initialDescription, onClick, open, onClose }) {
  console.log("course form");
  const [title, setTitle] = useState(initialTitle || "");
  const [description, setDescription] = useState(initialDescription || "");
  const onCreateCourseClick = (e) => {
      const courseData = { title, description };
      onsubmit(courseData).catch((err) => {
          alert("error occured");
      });
    }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a Course</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a Course</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Course title"
            value={title}
            type="text"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            label="Course description"
            type="text"
            value={description}
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            required
          />

        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit" onClick={onCreateCourseClick}>Create</Button>
          <Button color="primary" onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseForm;
