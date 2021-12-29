

export default function FAQ(){
    // Element data
    const faqData = [
        {
            question: 'Question 1',
            answear: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ratione alias accusantium cum. Aut illum eius ipsam totam inventore maiores quod dolor voluptates, vero, quos consectetur nihil quidem officia? Aliquid.',
        },
        {
            question: 'Question 2',
            answear: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ratione alias accusantium cum. Aut illum eius ipsam totam inventore maiores quod dolor voluptates, vero, quos consectetur nihil quidem officia? Aliquid.',
        },
        {
            question: 'Question 3',
            answear: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ratione alias accusantium cum. Aut illum eius ipsam totam inventore maiores quod dolor voluptates, vero, quos consectetur nihil quidem officia? Aliquid.',
        },
    ]
    // Element logic
    const onShow = (index) => {
        const div = document.querySelector(`.faq-answear[data-key='answear-${index}']`);

        if(div.classList.contains('show')){
            div.classList.remove('show');
        }else{
            div.classList.add('show');
        }
    }


    // Render Section
    return(
        <section id="faq-section" className="py-20 px-24">
            <h2 className='section-header'>FAQ</h2>

            <div className="mt-8">

                <div className="faq-wrapper mx-auto">
                    { faqData.map((el, index) => {
                            return(
                                <>
                                    <div className="faq-question"
                                    onClick={(event) =>{
                                        onShow(index);
                                        console.log(event.target);
                                        if(event.target.classList.contains('opend')){
                                            event.target.classList.remove('opend');
                                        }else{
                                            event.target.classList.add('opend');
                                        }
                                     }}>
                                        { el.question }
                                    </div>
                                    <div className="faq-answear" data-key={`answear-${index}`}>{ el.answear }</div>
                                </>
                             );
                        }) }
                </div>

            </div>
        </section>
    );
}