import React from 'react';
import Title from "../Title";
export default function Contact() {
    return(
        <section>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us" />
                    <form className="mt-5" action="https://formspree.io/jmckeeco84@gmail.com" method="POST">
                        {/*first*/}
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="john smith"
                            />
                        </div>
                        {/*email*/}
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" placeholder="example@example.com"
                            />
                        </div>
                        {/*subject*/}
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important!!!"
                            />
                        </div>
                        {/*message*/}
                        <div className="form">
                            <textarea name="message" className="form-control" rows="10" placeholder="Write your message here." />
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit"
                                   value="send"
                                   className="form-control bg-primary text-white"/>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}