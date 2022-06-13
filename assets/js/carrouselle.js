
/**
 * @description Carrouselle 
 * @param {
 *  images: Array<string>,
 * duration: number,
 * interval: number,
 * width: number,
 * height: number,
 * } options
 */
class Carouselle {
    constructor(options={ images: [], duration: 1000, interval: 3000, width: '400px', height: '400px' }) {

        this.options=options;
        this.init();
    }

    init() {
        this.createCarrouselle();

    }


    createCarrouselle() {
        let offset=parseInt(this.options.width)*this.options.images.length/10;
        console.log(offset);
        let carrouselle=document.createElement('div');
        carrouselle.classList.add('carrouselle');
        carrouselle.style.display='block';
        carrouselle.style.display='flex';
        carrouselle.style.flexDirection='row';
        carrouselle.style.justifyContent='center';
        carrouselle.style.alignItems='center';
        carrouselle.style.flexWrap='nowrap';
        carrouselle.style.transform=`translateX(${offset}px)`;

        /*      carrouselle.style.overflow='hidden'; */

        /* create item  */
        this.options.images.forEach(image => {
            let item=document.createElement('div');
            item.classList.add('item');
            item.style.width=this.options.width;
            item.style.height=this.options.height;
            item.style.backgroundImage=`url(${image})`;
            item.style.backgroundSize='cover';
            item.style.backgroundPosition='center';
            item.style.backgroundRepeat='no-repeat';
            item.style.transition='all 1s ease';
            item.style.margin='0 10px';
            item.style.flex='0 0 auto';
            item.style.borderRadius='15px';

            carrouselle.appendChild(item);

        });
        document.getElementById('carrousel').appendChild(carrouselle);
        /* defilement automatique du carouselle */
        let index=0;
        setInterval(() => {
            index++;
            if (index>=this.options.images.length-3) {
                index=0;
            }
            document.querySelectorAll('.item')
                .forEach(item => {

                    item.style.transform=`translate3d(${-index*100}% , 0, 0)`;
                });


        }, this.options.interval);


    }






}



new Carouselle({
    images: [
        './assets/img/img_2.jpg',
        './assets/img/img_1.jpg',
        './assets/img/img_3.jpg',
        './assets/img/img_4.jpg',
        './assets/img/img_5.jpg'],
    duration: 1000,
    interval: 3000,
    width: '500px',
    height: '300px'
}
);
