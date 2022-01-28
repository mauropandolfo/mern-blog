import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="#" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit.
                    <div className="singlePostEdit">
                        <FaEdit className='singlePostIcon'/>
                        <FaTrash className='singlePostIcon'/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="SinglePostAuthor">Author: <b>Somebody</b></span>
                    <span className="SinglePostDate">30 minutes ago</span>
                </div>
                <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum amet nulla dolor libero natus officiis veritatis voluptatem architecto ab odit minima, placeat, et deserunt nobis sequi dolorem ipsam, iure eaque saepe nesciunt vero enim fugiat aliquid. Dolores at aliquid similique, quam consectetur perspiciatis possimus unde doloribus id magni aperiam voluptates, optio, praesentium obcaecati a architecto cum natus sint necessitatibus odit nisi! Blanditiis laudantium esse quia enim explicabo rerum, voluptate eligendi natus accusamus, magnam nihil voluptatem officia. Voluptatem quo dolorem, alias necessitatibus ipsam sunt dolor nihil suscipit dolores pariatur at excepturi quod. Suscipit provident, ducimus, laudantium ipsum, similique necessitatibus accusamus repellat illum quia distinctio saepe animi officiis dignissimos ipsa dolores quod modi deleniti dolorum fuga! Soluta, numquam dolores distinctio officia corporis, dolorum itaque excepturi consequatur autem tempore culpa nam minima. Asperiores animi inventore temporibus quae? Dolores officiis voluptates nulla, corrupti tempora optio voluptatibus dolorem fugiat, exercitationem placeat accusantium repudiandae quos omnis veniam! Sint eius perferendis ex odit porro minus ipsam eligendi tempore quibusdam, nesciunt delectus iure facere sit quos illo magnam, blanditiis, sequi doloribus quas asperiores voluptas ad. Consequuntur harum dolorem ducimus quas, itaque rerum? Dolores rerum unde inventore corrupti accusamus, hic non tempora facilis porro quis nam maiores quam eum minus molestiae aperiam impedit error veniam dolorem ullam, modi voluptate, ex totam? A reprehenderit sequi, repellat obcaecati voluptatibus quam laboriosam quaerat fugiat ut quidem quis ad unde rerum eligendi voluptas ratione soluta beatae explicabo ducimus harum? Dolores aperiam earum soluta, necessitatibus praesentium odio aut ducimus atque autem totam sint.</p>

            </div>
        </div>
    );
}
