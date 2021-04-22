import { Helmet } from 'react-helmet';

function Title(){
    return (
        <main>
            <Helmet>
                <title>Zeljko Cumura</title>
                <meta name="description" content="Kolekcija piva" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>    
        </main>
    )
}


export default Title;