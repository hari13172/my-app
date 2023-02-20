import React, {useState} from 'react'

const Card = (props) => {
    const  [Modal, setModal] = useState(false)
    

    const togglemodel = () => {
        setModal(!Modal)
    }
  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} onClick={togglemodel}/>
            </div>

            <div className='category d_flex'>
                <span>{props.category}</span>
                <label>
                    <i className='far fa-heart'></i>
                    {props.totalLike}
                </label>
            </div>
            <div className='title'>
                <h2>{props.title}</h2>
                <a href='#popup' className='arrow'>
                    <i className='fas fa-arrow-right'></i>
                    </a>
            </div>
        </div>

        {Modal && (
            <div className='modal'>
                <div onClick={togglemodel} className='overlay'>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} />
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - design</span>
                            <h1>{props.title}</h1>
                            <p>lorem ipsum such nach einen infromatone he is such a wonderful guy and has the capacity to manage every thing thats his strength </p>
                            <p>lorem ipsum such nach einen infromatone he is such a wonderful guy and has the capacity to manage every thing thats his strength </p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    Like This <i className='far fa-thumbs-up'></i>
                                </button>
                                <button className='btn_shadow'>
                                    view project <i className='fas fa-chevron-right'></i>
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={togglemodel}>
                            <i className='fas fa-times'></i>
                            </button>
                                    
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Card