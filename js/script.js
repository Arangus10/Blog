'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
        
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks) {
    activeLink.classList.remove('active');
    }
    
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.toggle('active');
        
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.article .active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

  /* [DONE] get 'href' attribute from the clicked link */
    
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
    
}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


/*..................part.2...................*/

/* [IN PROGRESS] function generateTitleLinks */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */
    
    const titleList = document.querySelector(optTitleListSelector).innerHTML = '';
    console.log(titleList);

  /* for each article */
    
    const articles = document.querySelectorAll(optArticleSelector);
    
    for (let article of articles) {
        
        /* get the article id */
        const articleId = optTitleListSelector.getAttribute('id');

        /* find the title element - to ma być w tej pętli? */
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into titleList */

        titleList.innerHTML = titleList.innerHTML + linkHTML;

    }
 
    
    
}

generateTitleLinks();


