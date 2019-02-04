class Nav {
    constructor(){
        this.element = document.getElementById("nav");
        const ul = document.createElement('ul');
        ul.classList.add('header__nav-ul');
        this.element.appendChild(ul);
        this.ul = ul;
        this.li = [];
        const liList = ['home', 'about', 'login', 'sign up'];
        
        liList.forEach((li) => {
            this.li.push(new NavItem(`#${li}`, li));
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