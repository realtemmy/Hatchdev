class SongNode {
  name: string;
  next: SongNode | null;

  constructor(name: string) {
    this.name = name;
    this.next = null;
  }
}


class Playlist {
  head: SongNode | null;
  current: SongNode | null;
  repeat: boolean;

  constructor() {
    this.head = null;
    this.current = null;
    this.repeat = false;
  }

  addSong(name: string): void {
    const newSong = new SongNode(name);
    if (!this.head) {
      this.head = newSong;
      this.current = this.head;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newSong;
    }
  }


  toggleRepeat(): void {
    this.repeat = !this.repeat;
    console.log(`Repeat is now ${this.repeat ? "ON" : "OFF"}`);
  }

  playNext(): void {
    if (!this.current) {
      console.log("Playlist is empty.");
      return;
    }

    console.log(`Playing: ${this.current.name}`);

    if (this.current.next) {
      this.current = this.current.next;
    } else if (this.repeat) {
      this.current = this.head; // Start over
    } else {
      console.log("End of playlist.");
      this.current = null;
    }
  }

  shuffle(): void {
    const songs: string[] = [];

    let node = this.head;
    while (node) {
      songs.push(node.name);
      node = node.next;
    }

    // Shuffle array (Fisher-Yates)
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    // Rebuild linked list from shuffled songs
    this.head = null;
    this.current = null;
    for (const song of songs) {
      this.addSong(song);
    }

    this.current = this.head;

  }
}

const playlist = new Playlist();

playlist.addSong("Shape of You");
playlist.addSong("Blinding Lights");
playlist.addSong("Levitating");
playlist.addSong("Peaches");
// playlist.playNext()
playlist.shuffle()

console.log(playlist)