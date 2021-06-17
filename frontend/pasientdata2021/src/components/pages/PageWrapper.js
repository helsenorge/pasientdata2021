
import Footer from './Footer'

const PageWrapper = ({children}) => {

     return (
        <>
        <div className="container" style={{minHeight:"1000px"}}>
            {children}
        </div>
        <Footer text={"Welcome to PasientData2021"}/>
        </>
    )
}

export default PageWrapper;