// let options = {
//     root: document.querySelector(".kala"),
//     rootMargin: "0px",
//     threshold: 1.0,
//     };

    // function callback(entries , observer) {
    //     // const html=document.querySelector('.html');
    //     // const css=document.querySelector('.css');
    //     // const js=document.querySelector('.js');
    //     // const react=document.querySelector('.react');
    //     // const dsa=document.querySelector('.DSA');

    //     // html.classList.add('html-active');
    //     // css.classList.add('css-active');
    //     // js.classList.add('js-active');
    //     // react.classList.add('react-active');
    //     // dsa.classList.add('DSA-active');
         
    //     console.log(entries);

    // }
    function slider(ele, arr){
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                const intersecting = entry.isIntersecting;
                entry.target.classList.add(intersecting? `${arr[ele]}-active`: "")
                console.log(entry);
            });
        });
        observer.observe(document.querySelector(`.${arr[ele]}`));
    }
    const arr2=['html','css','js','react','DSA'];
    let i=0;
    while (i<arr2.length){
        slider(i,arr2);
        i++;
    }