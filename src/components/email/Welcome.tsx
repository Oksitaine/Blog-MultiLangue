import {
    Body,
    Button,
    Head,
    Html,
    Preview,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

interface TwitchResetPasswordEmailProps {
    Pseudo?: string
}

export const Welcome = ({
    Pseudo = 'zenorocha'
}) => {

    return (
        <Html>
            <Head />
            <Preview>You can see my new WGlint BLOG</Preview>
            <Body>
                <Tailwind
                    config={{
                        theme: {
                            extend: {
                                colors: {
                                    brand: '#007291',
                                },
                            },
                        },
                    }}
                >   
                    <h1>Hello {Pseudo} ! You can comme and see my new blog  </h1>
                    <Button
                        href="https://example.com"
                        className="bg-brand px-3 py-2 rounded-md font-medium leading-4 text-white"
                    >
                        Come in Website
                    </Button>
                </Tailwind>
            </Body>
        </Html>
    );
};

export default Welcome;