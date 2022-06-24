const app = Vue.createApp({
  // data, functions
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      books: [
        {
          title: "The final empire",
          author: "Saugat Giri",
              img: "assets/img1.jpg",
              isFav: true,
        },
          {
              title: "oathbreaker",
              author: "Saugat Giri",
              img: "assets/img2.jpg",
              isFav: false,

          },
        {
          title: "the way of kings",
          author: "Saugat Giri",
            img: "assets/img3.jpg",
            isFav: true,

        },
      ],
      age: 22,
      x: 0,
      y: 0,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      },
      handleClick(book) {
          book.isFav = !book.isFav;
    }
    },
  
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
      }
  }
});

app.mount("#app");
