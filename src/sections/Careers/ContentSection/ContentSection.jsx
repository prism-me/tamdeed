import React from 'react';

export default function ContentSection(props) {

    return (
        <div className={"container"}>
            <p className={"ContentSection"}
                dangerouslySetInnerHTML={{
                    __html:
                        props?.content?.description,
                }}
            >
                {/* Thank you for considering joining the American Gulf School family. After
                conducting a tour with us, please adhere to the below steps for acceptance and
                registration. */}
            </p>
        </div>
    );
}