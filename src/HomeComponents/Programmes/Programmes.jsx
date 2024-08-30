import React from 'react'
import './Programmes.css'
import edu from '../Assets/edu.jpg'
import animal from '../Assets/animal.jpg'
import blood from '../Assets/blood.jpg'
import beach from '../Assets/beach.jpg'
import tree from '../Assets/tree.jpg'
import fund from '../Assets/fund.jpg'
import childcare from '../Assets/childcare.jpg'
import rehab from '../Assets/rehab.jpg'

const Programmes = () => {
  return (
    <div className='promain'>
        <h1 id='prohead'>OUR <span id='spanimpact'>PROGRAMMES</span></h1>

        <div className='procolumns'>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>EDUCATION</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures.</h3>
                </div>
            </div>
            <div className='procol1' id='animalres'>
                <div id='edu'><img src={animal} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>ANIMAL RESCUE</h1>
                    <h3 id='proh3'>Protecting lives, giving hope, <br />rescuing animals in need.</h3>
                </div>
            </div>
        </div>

        <div className='procolumns'>
            <div className='procol1' id='blooddon' >
                <div id='edu'><img src={blood} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>BLOOD DONATION</h1>
                    <h3 id='proh3'>Saving lives, spreading hope, <br /> one donation at a time.</h3>
                </div>
            </div>
            <div className='procol1' id='beachcl'>
                <div id='edu'><img src={beach} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>BEACH CLEAN UP </h1>
                    <h3 id='proh3'>Preserving shores and oceans, <br />keeping beaches clean.</h3>
                </div>
            </div>
        </div>

        <div className='procolumns1'>
            <div className='procol1' id='treepl' >
                <div id='edu'><img src={tree} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>TREE PLANTATION</h1>
                    <h3 id='proh3'>Greening the planet, <br />one tree at a time.</h3>
                </div>
            </div>
            <div className='procol1' id='fundra'>
                <div id='edu'><img src={fund} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>FUNDRAISING</h1>
                    <h3 id='proh3'>Empowering change through <br />generosity and community support.</h3>
                </div>
            </div>
        </div>

        <div className='procolumns1' >
            <div className='procol1' id='childca'>
                <div id='edu'><img src={childcare} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>CHILDCARE</h1>
                    <h3 id='proh3'>Guiding growth and <br />supporting every child's journey.</h3>
                </div>
            </div>
            <div className='procol1' id='rehabil'>
                <div id='edu'><img src={rehab} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>REHABILITATION</h1>
                    <h3 id='proh3'>Restoring lives, fostering resilience, <br />and supporting holistic recovery.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programmes