
import BShap2 from '../../img/star-shape.png'

const PageTitle = (props) => {
    return (
        <div className="breadcrumb-section section-bg-2">
           
                <div className="breadcrumb-wrapper " style={{ backgroundColor:"var(--color-blue)"}}>
                   
                    <div className="star-shape">
                        <img src={BShap2} alt="img" />
                    </div>
                    <div className="container">
                        <div className="page-heading center">
                            <span className='section-tags tags-light'>{props.pageTitle}</span>
                            <h1>{props.pagesub}</h1>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default PageTitle;


