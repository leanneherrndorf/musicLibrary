
class Library {
  constructor(name, creator, playlist){
    this.name = name;
    this.creator = creator;
    this.playlist = playlist;
  }
}

class Playlist {
  constructor(playlistName, tracks) {
    this.playlistName = playlistName;
    this.tracks = tracks;
  }
  get overallRating() {
    return this.calcRating();
  }
  calcRating() {
    let ratingTotal = 0;
    for (let prop in this.tracks) {
      ratingTotal += this.tracks[prop].rating;
    }
    let rating = ratingTotal / this.tracks.length;
    return rating;
  }
  get totalDuration() {
      return this.calcDuration();
  }
  calcDuration() {
    let duration = 0;
    for (let prop in this.tracks) {
      duration += this.tracks[prop].length;
    }
    return duration;
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

//creating new instances
const newTrack = new Track("t1", 1, 65);
const newTrack2 = new Track("t2", 5, 65);
const newPlaylist = new Playlist("p1", [newTrack, newTrack2]);
const newLibrary = new Library("Music Library", "Leanne", [newPlaylist]);


console.log(newLibrary);
console.log(newPlaylist.overallRating);
console.log(newPlaylist.totalDuration);
