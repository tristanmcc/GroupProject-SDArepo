import Api from "./Api";

class LecturesApi {

    getAllLectures() {
        return Api.get('/videos');
    }

    getAllByCourseId(id) {
        console.log("Value of courseId in API" + id)
        return Api.get('/videos/' +id);
    }

    createLecture(video) {
        return Api.post('/videos',video);
    }

    updateLecture(video) {
        console.log("I'm updated... or am I?", video);
        return Api.put('/videos',video);
    }

    deleteLecture(id) {
        return Api.delete('/videos/'+id);
    }

}

export default new LecturesApi();