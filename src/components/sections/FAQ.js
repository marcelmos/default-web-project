

export default function FAQ(){



    return(
        <section id="faq-section" className="py-20 px-24">
            <h2 className='section-header'>FAQ</h2>

            <div className="grid grid-cols-3 gap-7 mt-8">

                <div className="faq-wrapper">
                    <div className="faq-question" data-label="question-1" onClick={console.log(document.querySelector('.faq-answear'))}>Question 1</div>
                    <div className="faq-answear" data-label="answear-1">Answear 1</div>
                    <div className="faq-question" data-label="question-2" onClick={console.log(document.querySelector('.faq-answear'))}>Question 2</div>
                    <div className="faq-answear" data-label="answear-2">Answear 2</div>
                </div>

            </div>
        </section>
    );
}