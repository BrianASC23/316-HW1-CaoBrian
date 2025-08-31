import { jsTPS_Transaction } from "../../jstps/index.js";
import PlaylisterModel  from "../PlaylisterModel.js"

/**
 * Edit Song Transaction
 *
 * This class is used to represent a transaction for editing + confirming a song in the playlist.
 *
 * @author Brian Cao
 */

export default class EditSong_Transaction extends jsTPS_Transaction{
    /**
     * Initializes this object so that it can do both undo and redo the tansaction.
     *
     * @param {PlaylisterModel} initModel The Model of the App
     * @param {number} initIndex the index of the song
     * @param {PlaylistSongPrototype} initSong the "created" song
     */

    constructor(initModel, initIndex, initSong, initNewTitle, initNewArtist, initNewYoutube, initNewYear){
        super();
        this.model = initModel;
        this.index = initIndex;
        this.song = initSong;
        this.newTitle = initNewTitle;
        this.newArtist = initNewArtist;
        this.newYoutube = initNewYoutube;
        this.newYear = initNewYear;
        this.oldTitle = this.song.title;
        this.oldArtist = this.song.artist;
        this.oldYoutube = this.song.youTubeId;
        this.oldYear = this.song.year;

    }

    doTransaction(){
        this.model.saveSong(this.index, this.newTitle, this.newArtist, this.newYoutube, this.newYear);
    }

    undoTransaction(){
        this.model.saveSong(this.index, this.oldTitle, this.oldArtist, this.oldYoutube, this.oldYear);
        this.model.redo();
    }

}