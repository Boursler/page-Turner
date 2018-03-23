
var googleBooksApiKey = 'AIzaSyA1b6ByAolu8UnLzqSE5KleVdhA572NBRY';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnvuYT1uFfE2BXKi_MbLlwhvDpVLEi6So",
    authDomain: "page-turner-198318.firebaseapp.com",
    databaseURL: "https://page-turner-198318.firebaseio.com",
    projectId: "page-turner-198318",
    storageBucket: "",
    messagingSenderId: "246039286101"
};
firebase.initializeApp(config);
database = firebase.database();

var searchResult = [
    /*


      {
          title: "Hello",
          authors: ["Jake","Serge"],
          publisher: "Warner Bros",
          publishedDate: "2018",
          pageCount: 456,
          printedPageCount: 463,
          imageLinks: {medium: "http://books.google.com/books/content?id=n14-2xhMz2cC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73KskaSd6-OaGfJ2ayNGEtJvQI9fD6CnP77tkLFEit_n1ok9omZVNqKoxxhxu_cMt8G5Xw36PQWGgYhFjPzluhW5IbcksPr1OJPcV2t2q6jbptOv1Pon8bznVKre5zFPkkotyXv&source=gbs_api"},
          saleability: "Sale!",
          retailPrice: "19.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida in augue sed gravida. Quisque magna elit, dictum id congue eu, gravida id purus. Ut libero justo, vulputate non sagittis et, lacinia nec enim. Nullam interdum elit sapien, id faucibus justo semper sed. Nullam eu blandit velit. Phasellus fringilla urna et ultricies rutrum. Praesent et tortor eu nibh vestibulum bibendum. Etiam a tincidunt lacus. Donec tincidunt mi luctus nunc scelerisque iaculis. Sed elementum vehicula ex, nec tristique felis vulputate sed. Ut laoreet tristique est non varius. Ut convallis feugiat ornare. Aliquam volutpat velit at nibh rhoncus, sit amet condimentum urna ultrices. Nunc molestie nunc in nisl viverra sollicitudin. Etiam bibendum hendrerit felis, id tincidunt augue laoreet sed. Vestibulum pellentesque mattis euismod. Quisque et urna sit amet orci accumsan egestas id fermentum neque.Duis ac porta est, eget imperdiet dolor. Sed enim mauris, tempor sit amet ex eget, maximus molestie augue. In tempor nulla tincidunt nisl sagittis feugiat. Duis cursus nibh eget diam luctus, nec sagittis arcu interdum. Fusce sit amet vehicula ex. Vivamus fermentum sollicitudin nibh, ac sodales arcu feugiat id. Sed vel scelerisque mauris, aliquet placerat mi. Donec hendrerit lorem eget interdum suscipit. Pellentesque tincidunt quis tortor sit amet sollicitudin. Nullam at maximus purus. Phasellus et iaculis lorem, a volutpat lectus. Pellentesque sed luctus magna. Sed quis suscipit orci, et dapibus est. In blandit vel neque nec suscipit. Curabitur sodales, elit a aliquam consectetur, nibh nisl euismod metus, a dapibus arcu nisl at urna. Praesent tempor ante nunc.        Donec congue luctus dui id dictum. Donec porta sapien eu blandit eleifend. Donec a malesuada urna. Nam eget turpis risus. In hac habitasse platea dictumst. Sed ullamcorper gravida enim, et feugiat nisl ornare eu. Aliquam eget mi bibendum, venenatis ante a, consectetur sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque lorem et massa auctor facilisis. Curabitur tincidunt eu magna interdum tincidunt.Sed facilisis eget felis sed vehicula. Cras eget posuere sem. Donec purus quam, blandit sed justo sodales, aliquam congue purus. Aliquam lacinia nec diam non varius. Aenean eget ex ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam est a urna fringilla, tempor mattis orci auctor. Maecenas sit amet molestie mi. Curabitur lobortis rhoncus metus, eget sollicitudin ex. Vestibulum feugiat euismod lectus, sed elementum orci vulputate vel. Donec imperdiet ipsum molestie leo vulputate egestas. Aliquam consectetur urna ac tincidunt euismod. Vestibulum eu ex ac metus malesuada ultrices."
      },
      {
          title: "Hello",
          authors: ["Jake","Serge"],
          publisher: "Warner Bros",
          publishedDate: "2018",
          pageCount: 456,
          printedPageCount: 463,
          imageLinks: {medium: "http://books.google.com/books/content?id=n14-2xhMz2cC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73KskaSd6-OaGfJ2ayNGEtJvQI9fD6CnP77tkLFEit_n1ok9omZVNqKoxxhxu_cMt8G5Xw36PQWGgYhFjPzluhW5IbcksPr1OJPcV2t2q6jbptOv1Pon8bznVKre5zFPkkotyXv&source=gbs_api"},
          saleability: "Sale!",
          retailPrice: "19.99",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida in augue sed gravida. Quisque magna elit, dictum id congue eu, gravida id purus. Ut libero justo, vulputate non sagittis et, lacinia nec enim. Nullam interdum elit sapien, id faucibus justo semper sed. Nullam eu blandit velit. Phasellus fringilla urna et ultricies rutrum. Praesent et tortor eu nibh vestibulum bibendum. Etiam a tincidunt lacus. Donec tincidunt mi luctus nunc scelerisque iaculis. Sed elementum vehicula ex, nec tristique felis vulputate sed. Ut laoreet tristique est non varius. Ut convallis feugiat ornare. Aliquam volutpat velit at nibh rhoncus, sit amet condimentum urna ultrices. Nunc molestie nunc in nisl viverra sollicitudin. Etiam bibendum hendrerit felis, id tincidunt augue laoreet sed. Vestibulum pellentesque mattis euismod. Quisque et urna sit amet orci accumsan egestas id fermentum neque.Duis ac porta est, eget imperdiet dolor. Sed enim mauris, tempor sit amet ex eget, maximus molestie augue. In tempor nulla tincidunt nisl sagittis feugiat. Duis cursus nibh eget diam luctus, nec sagittis arcu interdum. Fusce sit amet vehicula ex. Vivamus fermentum sollicitudin nibh, ac sodales arcu feugiat id. Sed vel scelerisque mauris, aliquet placerat mi. Donec hendrerit lorem eget interdum suscipit. Pellentesque tincidunt quis tortor sit amet sollicitudin. Nullam at maximus purus. Phasellus et iaculis lorem, a volutpat lectus. Pellentesque sed luctus magna. Sed quis suscipit orci, et dapibus est. In blandit vel neque nec suscipit. Curabitur sodales, elit a aliquam consectetur, nibh nisl euismod metus, a dapibus arcu nisl at urna. Praesent tempor ante nunc.        Donec congue luctus dui id dictum. Donec porta sapien eu blandit eleifend. Donec a malesuada urna. Nam eget turpis risus. In hac habitasse platea dictumst. Sed ullamcorper gravida enim, et feugiat nisl ornare eu. Aliquam eget mi bibendum, venenatis ante a, consectetur sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque lorem et massa auctor facilisis. Curabitur tincidunt eu magna interdum tincidunt.Sed facilisis eget felis sed vehicula. Cras eget posuere sem. Donec purus quam, blandit sed justo sodales, aliquam congue purus. Aliquam lacinia nec diam non varius. Aenean eget ex ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam est a urna fringilla, tempor mattis orci auctor. Maecenas sit amet molestie mi. Curabitur lobortis rhoncus metus, eget sollicitudin ex. Vestibulum feugiat euismod lectus, sed elementum orci vulputate vel. Donec imperdiet ipsum molestie leo vulputate egestas. Aliquam consectetur urna ac tincidunt euismod. Vestibulum eu ex ac metus malesuada ultrices."
      }
      */
];

function generateItems() {
    $("#searchResult").empty();
    searchResult.forEach(function (value) {
        var source = $("#search-card-template").html();
        var template = Handlebars.compile(source);
        var context = {
            imageSrc: value.imageLinks.medium,
            title: value.title,
            price: value.retailPrice,
            shortDescription: "",
            longDescription: "",
            author: ""
        };
        shortDesc = "";
        if (value.description != null) {
            if (value.description.length > 100) {
                shortDesc = value.description.substring(0, 100) + "...";
            } else {
                shortDesc = value.description;
            }
            context.shortDescription = shortDesc;
            context.longDescription = value.description;
        }

        authors = "";
        value.authors.forEach(function (authorName) {
            authors += authorName + ', ';
        });
        authors = authors.substring(0, authors.length - 2);
        context.author = authors;
        var html = template(context);
        $("#searchResult").append($(html));
    });
}
/*
generateItems();
*/
function runSearch() {
    //library of congress control num
    //isbn
    // Online Computer Library Center Number
    //publisher


    var title = ":" + $("#titleField").val().trim();
    var author = ":" + $("#authorField").val().trim();
    var subject = ":" + $("#subjectField").val().trim();
    var publisher = ":" + $("#publisherField").val().trim();
    var isbn = ":" + $("#isbnField").val().trim();
    var lccn = ":" + $("#lccnField").val().trim();
    var oclc = ":" + $("#oclcField").val().trim();

    var paidFilter = $("input:checked").filter("input[name='filterGroup']").next().text().toLowerCase().split(" ").join("-");
    console.log(paidFilter + " filter");
    var orderFilter = $("input:checked").filter("input[name='orderGroup']").next().text().toLowerCase();
    var printFilter = $("input:checked").filter("input[name='printGroup']").next().text().toLowerCase();
    console.log(orderFilter + " order filter");
    console.log(printFilter + "print filter");


    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=+intitle" + title + "+inauthor:" + author + "+ subject=" + subject + "&+" + isbn + "&key=" + googleBooksApiKey + "&maxresults=10&projection=lite&filter=" + paidFilter + "&orderBy=" + orderFilter + "&printType=" + printFilter + "";


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(JSON.stringify(response) + "response from Google Books API");
        console.log(queryURL);

        searchResult = [];
        response.items.forEach(function (value) {
            if (value.saleInfo.saleability == "FOR_SALE") {
                var book = {
                    title: value.volumeInfo.title,
                    authors: value.volumeInfo.authors,
                    publisher: value.volumeInfo.publisher,
                    publishedDate: value.volumeInfo.publishedDate,
                    pageCount: value.volumeInfo.pageCount,
                    printedPageCount: value.volumeInfo.printedPageCount,
                    imageLinks: value.volumeInfo.imageLinks,
                    retailPrice: value.saleInfo.retailPrice.amount,
                    buylink: value.saleInfo.buylink
                };
                if (value.volumeInfo.hasOwnProperty("description")) {
                    book.description = value.volumeInfo.description;
                } else {
                    book.description = null;
                }
                if (value.volumeInfo.hasOwnProperty("industryIdentifiers")) {
                    book.industryIdentifiers = value.volumeInfo.industryIdentifiers;
                } else {
                    book.industryIdentifiers = null;
                }
                searchResult.push(book);
            }
        });
        var description = $("<p>");
        img = $("<img>");
        img = img.attr("src", response.items[0].volumeInfo.imageLinks.thumbnail);
        console.log("image " + response.items[0].volumeInfo.imageLinks.thumbnail);
        description = description.text(response.items[0].volumeInfo.description);
        $("#booksDiv").append(img);
        $("#booksDiv").append(description);
    })
}
function generateQuery(field, html) {
    field = ":" + $("#" + field + "Form").val().trim();
}
function resetForm() {
    //set text of form elements to be empty string
    $("#titleForm").text("");
    $("#authorForm").text("");
    $("#subject").text("");
}

//testing runSearch filters
setTimeout(runSearch, 10000);
$(document).ready(function () {
    $(".button-collapse").sideNav();
});
$("#advanceSearchColumn .collapsible-header").on("click", function () {
    var iconText = $(this).find("i").text();
    if (iconText == "keyboard_arrow_up") {
        $(this).find("i").text("keyboard_arrow_down");
    } else {
        $(this).find("i").text("keyboard_arrow_up");
    }
});

$('.carousel.carousel-slider').carousel({ fullWidth: true });

$(document).ready(function () {
    $('.carousel').carousel({ dist: 0 });
    window.setInterval(function () { $('.carousel').carousel('next') }, 5000)
});

$(".btn-floating2").click(function () {
    $('html, body').animate({
        scrollTop: $("#bottom").offset().top
    }, 1500);
});

