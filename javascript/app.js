
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
];
var amount = 6;
///////////////////////////////////
//    Generate the cards(books)  //
// Does not need to be called    //
// use intialSetupPagination     //
///////////////////////////////////
function generateItems(indexStart, length){
    $("#cardDiv").empty();
    for(var i = indexStart; i < indexStart+length;i++){
        var value = searchResult[i];

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
        $("#cardDiv").append($(html));
    };
}
////////////////////////////////////
//      Setup Pagination          //
// Run this for every ajax call   //
////////////////////////////////////
function initialSetupPagination(){
    $(".pagination").css("display","block");
    var numPages = Math.ceil(searchResult.length/amount);
    
    var pagesDynamic = $("#pages");
    pagesDynamic.empty();
    for(var i = 0; i < numPages; i++){
        var pagIcon = $("<li class = 'wave-effect'><a href = '#'></a></li>");
        pagIcon.children("a").text(i+1);
        pagIcon.attr("data-index", i*6);
        if(i==0){
            pagIcon.removeClass("wave-effect");
            pagIcon.addClass("active");
        }
        pagesDynamic.append(pagIcon);
    }
    if($("#pages li").length>1){
        console.log("Greater")
        $("#pag-next").removeClass("disabled");
    }
    var dataLength = amount;
    if(searchResult.length < amount){
        dataLength = searchResult.length-index;
    }
    generateItems(0, dataLength);
}
////////////////////////////////
//  Left Right Chevron        //
////////////////////////////////
function leftRightChevronCheck(){
    if($("#pages li").eq(0).hasClass("active")){
        $("#pag-back").addClass("disabled");
    }else{
        $("#pag-back").removeClass("disabled");
    }
    if($("#pages li").eq($("#pages li").length-1).hasClass("active")){
        $("#pag-next").addClass("disabled");
    }else{
        $("#pag-next").removeClass("disabled");
    }
}
/*
Testing
generateItems();
*/
initialSetupPagination();
function runSearch() {
    //library of congress control num
    //isbn
    // Online Computer Library Center Number
    //publisher


    var title = $("#titleField").val().trim();
    var author = $("#authorField").val().trim();
    var subject = $("#subjectField").val().trim();
    var publisher = $("#publisherField").val().trim();
    var isbn = $("#isbnField").val().trim();
    var lccn = $("#lccnField").val().trim();
    var oclc = $("#oclcField").val().trim();

    var paidFilter = $("input:checked").filter("input[name='filterGroup']").next().text().toLowerCase().split(" ").join("-");
    console.log(paidFilter + " filter");
    var orderFilter = $("input:checked").filter("input[name='orderGroup']").next().text().toLowerCase();
    var printFilter = $("input:checked").filter("input[name='printGroup']").next().text().toLowerCase();
    console.log(orderFilter + " order filter");
    console.log(printFilter + "print filter");
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=+intitle :" + title + "+inauthor :" + author + "+subject : " + subject + "+inpublisher :" + publisher + "+isbn :" + isbn + "+lccn :" + lccn + "+oclc :" + oclc + "&key=" + googleBooksApiKey + "&maxresults=10&projection=lite&filter=" + paidFilter + "&orderBy=" + orderFilter + "&printType=" + printFilter + "";
    getURL();
    function getURL() {
        //reminder: add ":" before values in form
        var formArr = [title, author, subject, publisher, isbn, lccn, oclc];
        var key = ["+intitle :", "+inauthor :", "+subject :", "+inpublisher :", "+isbn :", "+lccn :", "+oclc :"]
        console.log(queryURL);
        for (var i = 0; i < formArr.length; i++) {
            if (formArr[i] !== undefined || "") {
                queryURL = queryURL.replace(key[i] + formArr[i], "");
                console.log("query URL after changes" + queryURL);
            }
            else { };


        }
    }




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
    });
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

/////////////////////////////////////////////////
//pagination buttons                           //
/////////////////////////////////////////////////
$(document).on("click", "#pages li:not(.active)", function(){
    
    var index = parseInt($(this).attr("data-index"));
    var dataLength = 6;
    if(searchResult.length-index < amount){
        dataLength = searchResult.length-index;
    }
    generateItems(index, dataLength);
    $("#pages").find(".active").addClass("wave-effect").removeClass("active");
    $(this).removeClass("wave-effect").addClass("active");
    leftRightChevronCheck();
});
$(document).on("click", "#pag-back:not(.disabled)",function(){
    var indexElement = $("#pages li").index($("#pages li.active"))-1;
    var dataIndex = parseInt($("#pages li").eq(indexElement).attr("data-index"));
    var dataLength = 6;
    if(searchResult.length-dataIndex < amount){
        dataLength = searchResult.length-dataIndex;
    }
    generateItems(dataIndex, dataLength);
    $("#pages").find(".active").addClass("wave-effect").removeClass("active");
    $("#pages li").eq(indexElement).removeClass("wave-effect").addClass("active");
    leftRightChevronCheck();
});
$(document).on("click", "#pag-next:not(.disabled)",function(){
    var indexElement = $("#pages li").index($("#pages li.active"))+1;
    var dataIndex = parseInt($("#pages li").eq(indexElement).attr("data-index"));
    var dataLength = 6;
    if(searchResult.length-dataIndex < amount){
        dataLength = searchResult.length-dataIndex;
    }
    console.log(dataIndex);
    console.log(dataLength);
    generateItems(dataIndex, dataLength);
    $("#pages").find(".active").addClass("wave-effect").removeClass("active");
    $("#pages li").eq(indexElement).removeClass("wave-effect").addClass("active");
    leftRightChevronCheck();
});

