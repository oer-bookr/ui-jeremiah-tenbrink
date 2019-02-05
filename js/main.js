class Nav {
    constructor(){
        this.element = document.getElementById("nav");
        this.fullPageElement = document.getElementById("full-page-nav");
        const ul = document.createElement('ul');
        const fullPageUl = document.createElement('ul');
        ul.classList.add('header__nav-ul');
        fullPageUl.classList.add("full-page-nav__ul");
        this.element.appendChild(ul);
        this.fullPageElement.appendChild(fullPageUl);
        this.ul = ul;
        this.fullpageUl = fullPageUl;
        this.li = [];
        const liList = [
            {
                name: 'home',
                link: "#",
            }, {
                name: 'about',
                link: "#about"
            },{
                name: 'login',
                link: "https://determined-lamarr-e4cba2.netlify.com/login"
            },{
                name: 'sign up',
                link: 'https://determined-lamarr-e4cba2.netlify.com'
            }];
        
        liList.forEach((li) => {
            this.li.push(new NavItem(`${li.link}`, li.name));
            this.fullpageUl.appendChild(new NavItem(`${li.link}`, li.name).element);
        });
        
        this.li.forEach((li) => {
            this.ul.appendChild(li.element);
        })
    }

}

class NavItem {
    constructor(href, text){
        const a = document.createElement('a');
        a.textContent = text;
        a.setAttribute('href', href);
        const li = document.createElement('li');
        li.appendChild(a);
        this.element = li;
    }
}

class Reviews{
    constructor(){
        Reviews.element = document.getElementById("reviews");
        
    }
    
    static addReview(review){
        // check if reviews exsist
        if (Reviews.reviews === undefined){
            Reviews.reviews = [];
        }
        Reviews.reviews.push(review);
        
        // create div for all the elements
        const div = document.createElement("div");
        div.classList.add("review");
        
        //create picture element
        const picture = document.createElement("img");
        picture.setAttribute("src", review.img);
        
        // create div for picture element
        const pictureContainer = document.createElement("div");
        pictureContainer.classList.add("review__image");
        
        //add picture to div child nodes
        pictureContainer.appendChild(picture);
        
        //add pic div to the review div
        div.appendChild(pictureContainer);
        
        //create div for content
        const content = document.createElement("div");
        content.classList.add("review__content");
        //create heading for name
        const name = document.createElement("h2");
        name.textContent = review.name;
        name.classList.add("review__content-name");
        
        //create p element
        const paragraph = document.createElement("p");
        paragraph.textContent = review.content;
        paragraph.classList.add("review__content-p");
        
        // add p element and name element to content child nodes
        content.appendChild(name);
        content.appendChild(paragraph);
        
        // add content to review div child nodes.
        div.appendChild(content);
        Reviews.element.appendChild(div);
        
    }
}

class Review {
    constructor(name, content, img){
        this.name = name;
        this.content = content;
        this.img = img;
    }
}

class Scroll {
    constructor (document) {
        this.navBar = document.getElementById("header");
        window.addEventListener("scroll", () => {
            this.scroll();
        });
        this.document = document;
        this.navBarSet = false;
    }
    
    scroll () {
        this.scrollHeight = this.document.scrollingElement.scrollTop;
        this.setNavBar();
    }
    
    setNavBar() {
        if (this.scrollHeight > 300) {
            if (!this.navBarSet){
                this.navBarSet = true;
                this.navBar.classList.add("expand");
                this.navBar.classList.add("position-fixed")
            }
        }else {
            if (this.navBarSet){
                this.navBar.classList.remove("expand");
                this.navBarSet = false;
                window.setTimeout(() => {
                    this.navBar.classList.remove("position-fixed");
                }, 400);
            }
        }
    }
}

const nav = new Nav();
const reviews = new Reviews();

const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut consectetur eum" +
" expedita explicabo fugit ipsa itaque, iure magnam maiores nesciunt obcaecati omnis" +
" optio placeat quaerat reprehenderit";

const person1 = new Review("Person1 Name", content, "../../images/pic01.jpg");
const person2 = new Review("Person2 Name", content, "../../images/pic01.jpg");
const person3 = new Review("Person4 Name", content, "../../images/pic01.jpg");
Reviews.addReview(person1);
Reviews.addReview(person2);
Reviews.addReview(person3);

document.getElementById("nav-button").addEventListener( "click", () => {
   document.getElementById("full-page-nav").classList.toggle("open");
});

document.getElementById("nav-close-button").addEventListener('click', () => {
   document.getElementById("full-page-nav").classList.remove("open");
});

const scroll = new Scroll(document);