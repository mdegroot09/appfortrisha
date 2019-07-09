import React, {Component} from 'react'
import ShowPosts from './ShowPosts'
import {updatePosts} from '../../redux/reducer'
import {connect} from 'react-redux'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      posts: [
        // testing data
        {
          id: 7,
          title: 'Latest Post',
          date: '6/27/19',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus rem, repellendus quas veniam exercitationem repudiandae voluptatum doloribus doloremque mollitia. Rerum vero sunt ad saepe nam aperiam ipsum deserunt quo.',
          family: true,
          makeup: true,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/e4nGMKIfZDj4BNQS2-6K2ItTYrc7hXW577n8qoFZ1dTzhgcooAvU7msAJyfA3SHBFyxBdKehwaKlMo8WUgAJCRrbDIJQNqbEtUsqcpK6rjazFJTmUuyZWtntbQXphiS0J5I6w1b90CJkm_errCtUaEL1ryIirTwJS-VB__xNSw7GIlOSu4qUiFY3E6obMPr2gGa4EtXeJUkfdjktAznOY6Xp_iE0AZoqaWiwzXVk6ddHorGNPCOQSw0fB3Sx01PTR2-qhovAUXd9AakHdMyL6ZDcc3hbtB539s78FAKjB-IyaEsv0ubFF63GQLfpw0KZkEt693_gtjQ_2d2sSDALJFCpWZpEaSUTwuidYq4RmHrvZpKun8MjQvEsAEnpnxAlXiTabT19otDjxUyYEFJInkukTLKeYNcJoU4wTycKo8E1tFParnywz2Ym-HW_SkPFX8d_W9LN38Enp-GZlWHkCy1vhwJM5m_bpyh5OalS3tYjwyvmrStqTjKkNnCvdB3Ko5uVD9hRAeYKPUzvxwoSjc8T_Wsh440UffRV9xKxJQP-gmv_yiH6Mw93koaEhJeLnqco4BUUUplvXFaehHKqb4c8WWNJ8jJZ4vYBsVR2Nrmt6Yi0fwbWiVJrNY3yuW9Oue7UnGfaDsNFMfCK5KEgsVRtVBrRQTw9=w1613-h907-no'
        },
        {
          id: 6,
          title: 'Sixth Post',
          date: '6/26/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aliquid dolorum, quasi natus alias quidem exercitationem quos commodi aperiam tenetur deserunt officia magni itaque voluptates maxime. Commodi eveniet rerum voluptatibus.',
          family: true,
          makeup: false,
          food: false,
          imageMain: 'https://lh3.googleusercontent.com/g2rK5d5AjXpj4ciPXUh8J4L9zlEmP0qleP2RDlAGyDRZs26HDTw9pHp__jkbrT_rdS6bh9Q-DhFFJsfMMcDiMg1XtLuJUbGOa8c3-1Dae1Kti0HrLjV2Oo4M1Q0HXIJ8X3kyW2Yra8BTGMZZCPeBFOYu0vkh_2ZL-wTe9AQs28o_b7OXjGNvbA7f0t4nleto2AAvNQ9tSGHK_do5R742sOvzajrJWp78gSK9W5nY7DQ3l-3Zhq7-m82InuGIp5us0qE3BMGfWif3IOJphbW6LH9OaNlSDGYx72AUy-4HSARYZom1giKvkTTzqpQbugzJC3PnbcvlnCCclYfull1K8B2pS-VLZWXvRweTLyXBDh1qqTxUOnaYdZu9cPJyiSqSIfBg7W99Wfm4dedh3KH83J41LcAhgZ2KG4WzJ3JBzcUIXF2Oru-_OOg4As0pEkyLbUycjUTSqKipXQ4kJaaohFOecm8mBMlt89SNvp_LaekigS23eh0qVo-sVsTx5UkAdafxmBbhi96d4c3_poW8k_34o5k1qg2VIcwdTc_uVECtT3TcLBu40UZcgSgmsQJTzxwu5-CmOxTeZ-kXDoN9O7guebB2qX8PcR56xdnSlNgQ2hfSSlycvIJGadYLLhtXeXJLrB2J5gkQKijbdrusFYAWgPBJ_ro3=w1613-h907-no'
        },
        {
          id: 5,
          title: 'Fifth Post',
          date: '6/25/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dignissimos? Culpa quod officiis at nesciunt similique nemo nam repellat sapiente quos porro harum facere, explicabo omnis sint reiciendis facilis recusandae.',
          family: true,
          makeup: true,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/rmxW8WS7BNXpCEG1If1M2HeXQcSA4_2CJBfVySRdXJAimjD1DXEnBSBl7OX2hQ5moHdZwZkD2PZ3udmJWIYI4PCbKkaRyLKBBQXMG01b91k4oUNCobVJ6ma5apdwnRtrxHH39T3gNQbOeIQzCGdrAjXbg6ez-cJnxHkhBgsQ_91ZRF-VTbYpasl8XxpwEE5RzZpvpc0w85iCQg22_76WGfsH-IVSKR6DGPVvTovzmGvBZkmZjIEYc_tvGTBrOm8GdMRYKOrMOu1mHou_gjQ-ZzK0M-jTZeCedB0M6rUJZqGKGABiAqkzummhqdKHC8m9DQ59UZ5Dc391YlVhH6c9lUWhkZnTIEabZVHCFoAEPTmiW3cHIadC1bqDWSeFdX9DpZ4QZXEf9xWyZl5YqKMuah53G14Zk_IQ54geJxXZ72eDTDe7C3z-KmkLxkWe12AjzFkTpwNH7YWiaIOLtvTzUpFSjG3JlXZQIWDzYdGuL-DyUMnKRqkC7dTf-d12c4_8oXLf5LtAgWh93f_b7jqh0Jb9Ltx4nQ55-Oxv_rmHYMwsYMStCN4954gTdxrF4StsQ4t0R-fkx_OSbyIKnECpWkpKihKRNos3Z2SXtpKNTE01g8QY1dsGECxg72oUMggbYzHxwN8vkXPHjyjcN7CIwyMtC4ImZ1yF=w1612-h908-no'
        },
        {
          id: 4,
          title: 'Fourth Post',
          date: '6/24/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi dolore fugiat amet perferendis, doloribus quaerat reprehenderit unde a nostrum deserunt maxime. Voluptatum suscipit nisi vero molestias officiis similique animi.',
          family: true,
          makeup: false,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/-sfNtB0xmRtSYEt7pGGDpBZXabGa8LEewv1xigXbVwAUz0wcgYKOb4zeCoSlHpRStvC079-D3k1p5fR1QUj1fARcBGQkhdcg1_am_TY8AOCDlDYKeUBAxhKuyWAz2I-SV4jqzEoWMlcaxX9QbEXFSfBi0HVTEACau3tMXqv16il_a-iDFIUmbR1e83F7hllNhWKIQAq2_1RvmOnRMWeB8npo6p6gcfMBmH5aHQzjE5bbzilLXEaabVQn-wBvNdYead1BB95tGUWVZtNB-sTlK8XLIfked05rzNypzWm8J1X5MNcbo8F9Rz_vtQqWzlaMIADGpCXOJcdN7GSiJhvAu0S-Hxc-I89FVlppkFwL9I_TvF9_7VZeCU5UtrJ6_aelvAURrTLS9SspDMZO7X5HiOygbZOoh41TeiJVAjnTs6OMzQuI_uedXHZvBTiENR_tIuKsl2Aw1yWEXuNSjuOsAQUpAUbL7c-vdw_rassO9qNoIPlWq_lWRLv_4g41oVd3ieS0tvudoXu0gE69lYoxBaUDjDrpeLFxmJQ1PymL_Ok38RrY_NV7rUwo9_GjgBRenm58i0SrJrL6ab3akHWp4CcufH-V7EhHi91T0sQshhPhbrNaZ5PC68JiLnh68pe0BBuf4xMMCHf6ojX2zRkbIAuvaJ_s40DU=w1613-h907-no'
        },
        {
          id: 3,
          title: 'Third Post',
          date: '6/23/19',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur, impedit officia ut voluptates modi eos molestiae ducimus corrupti, minima voluptatem quae, repellendus distinctio culpa aliquid in. Labore, hic esse.',
          family: true,
          makeup: true,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/UW5urVZFsGiOPQy96_gkWX944tJITnrDufyOJAvNSzl1GmF4WhXhvjIy2hefgzNaKtBnweX_ssFBcsziiSx4ege_kFrXVb676Lwi1tqYgmkO1c1jCHFsKE6YooWntv6EXplIRPy8wn3QBwoxpGs0F30DzZ7XpzN67Y3jnkMb9vDAGTc4d6_q2hrKmNPo7dGh_FC6vBwkRcnrd8Oh9hNhiYjb2GzQJMULwSlcmyXHmwFNHqnLcuN9Jha0ivZrYRiRDM6G7QykAKN6_PEOcNGljXHlOCO6ZOa16LHH9nw4gbqRoiYg_otqMLOklDcJZn4oV7qcQbubfo_sjIHurYEiIV-w6ke5fd0WDvoT_Y7QHhMDXEDb-LszJ5kjmmFvuiPBrkyoF2xRr7_p2ZeqYakRbiFi6OGa8gTz9YXVJOAjQXiYUOBM3yF4xjT-HgpRestkWnqJ9XPX_7iB9I89UVTcBlWT1GDWz1Z3gUDgKfNhOv2E4TSrTK0Th-HztLzAXGJzRiPkyS3J9ev-r4ZSWRAMHFWcq5NQoHEQgDM9ltrD_hkvhIPhSek0V-6kwdGaV53UxDn0EYO-bgBy12BAu9-9caItyIhZu4Lw8cO-SN83gBNV4gR_gc9vXlPqNKzKJHzyYyVK-33IUOKLF2X1-BxO1o56cU1KB6WR=w1612-h908-no'
        },
        {
          id: 2,
          title: 'Second Post',
          date: '6/22/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur maiores fugit sapiente doloribus ipsa esse, adipisci ratione quaerat aut incidunt sit asperiores alias, consequatur reiciendis, autem quibusdam iusto dolorum!',
          family: true,
          makeup: false,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/vr9-CWzsX4Y2VTy9pQ8beul89m1hFCzuQm8_x3PlKtGMo0gkLffpQk0GvMhPYn9AgxlZXzy7NpEpPcEjJRi0-94bruO2hGInEHgjYvwqnHre9-xLorXW11cfPxW-lvZl8wrBSaDLzoXivxySW_L_EvIZ4lupnHQpQvSGyFsMFz0V47wOiKd22lgshwtUd48F-0vX2aOG6NAGGouspTF1UBitIxf_Kmiy-1krKZ6YZZY1o1H1aYK-rLKb_1P_6VTI4sML5-mkB2dh0rX3His15S2EikqgQ3dfgZGJD8VtFSXwCDFaK0auWGVY2WaEbf3CwfaXMbVt4tVv9tPLTbFXrLeNVHo__CYqx9wiYXxgYca6WV3EH884QeaIx-oo5EwQdAp1pvtKrm9lZZEA9GVcqDq8qnmlr5v5sGR1Z-1hliSUtOmoUWeW-4FXDNF8BLr54lSWbXbjAdkqCN1iQ-0telQfL4UGNi3UMP8sbA0NjeVpu0ujSBc9KONL3vQdKr3HXJaIf9x3qcE1GfqUo-6UzYk2jPb3OJzdAW8ERtlvTXqvcAMhpoVGk4VJoRz8zlxCC4aHyElui3Sh92YaBnrnZIKV1aP9Sw2xUyp65W3fvH6sB746EHlUxi-dsLxfNT3XehY9joNWpsp76ZI4_roAtxbf-68DEKgT=w1613-h907-no'
        },
        {
          id: 1,
          title: 'First Post',
          date: '6/21/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, harum laudantium magnam natus aliquam, excepturi, cum quaerat asperiores aperiam enim labore. Nobis in dolorum itaque illum odio assumenda nisi aliquid!',
          family: true,
          makeup: false,
          food: true,
          imageMain: 'https://lh3.googleusercontent.com/Zc4Oa1RdwsJ2oDJxl8O0rJ0K4-umYnr9Thm0OyiAAvdBhWDd9UVnapMQZn1dhtdy3Yvvu-pFhc2Ja9iubQpXHDfEnGt7EleB-ebuoqeH_dmq6HtmeZ52MnFoceA_I-1Ynj8A7XaUAWu6Q_iC6jFW5TgVJfDFO0TXgDZ1MZjIlehvLElQyt3mLR3oQ6wtWUZCnCZse7XUxPlk7Zrbc2vHTF8IMjbH6QqQ-Q6tjvoibrQ0GIdJnaf3UCexYEFuE9mDO197YZId3vYy3HMZckoKp24VsuIuUHE7DE9MuqdbpbpntwMGuAmCstt-rXY7Evc2RiztsDN1guktdftGt_1AYeVa1BvPbUl2E8QNc--dUrJgRd64j0zK_ITjYyQvvZ2Rm8nd4tnnoM33YqvZDo3IUHTeXvKSJRUYHvKQ1_jQyZ_p2plabYfc0-PO0KhIUcrAS3Tn4v9ZSjAQxVVu_gyyGI3zJtPJ9M_MeTS2xM8bbRC5O0MA9VLe4eoCoboYZBOf0O2l3C5Lk7Ador1gDkneKgKU_q6iSu09rKD9AzbZf7Y3V8oO0m-8DzuVgCU1bQQyHOBAVjshvyi4q9SbG1FoxiFmn0Hp6f1zOt7rz3jW1Jxtu2NelMUBcmOdeZKgCBrwQHAqbRxqJ2Q-qiutp8ZN__LogGqG3oM1=w1613-h907-no'
        }
      ],
      viewMore: true,
      postsMax: 5,
      filter: '',
      activeTab: 'family',
      miniPostsList: 0,
      postID: 1,
      postShow: false
    }
  }

  componentDidMount = () => {
    this.updatePostsList()
    let {posts} = this.state
    this.props.updatePosts(posts)
  }

  updatePostsList = () => {
    let postsList = document.getElementsByClassName('postsList')[0]
    let miniPostsList = +postsList.offsetWidth
    this.setState({miniPostsList})
  }

  updateFilter = (value) => {
    let val = value.toLowerCase()
    this.setState({filter: val})
    if (val || this.state.viewMore === true){
      this.setState({viewMore: true})
    } else {
      this.setState({viewMore: false})
    }
  }

  updateActiveTab = (name) => {
    this.setState({activeTab: name})
  }

  updatePostShow = (id) => {
    let postShow = !this.state.postShow
    this.setState({postID: id})
    this.setState({postShow})
  }

  render(){
    // entire width of postsList
    let {miniPostsList} = this.state
    if (miniPostsList > 0){  // need this to avoid first render error
      let postsList = document.getElementsByClassName('postsList')[0]
      let miniPostsList = +postsList.offsetWidth * .7
      
      // when window width changes, reset miniPostsList
      if (miniPostsList !== this.state.miniPostsList){  
        this.setState({miniPostsList})
      }
    }

    // Loop through posts and display each
    let tabSpecific = this.state.posts.filter(post => {
      return post[this.state.activeTab]
    })

    let showPostsArr = tabSpecific.filter(post => {
      return (post.title.toLowerCase().includes(this.state.filter) || post.text.toLowerCase().includes(this.state.filter))
    })

    return(
      <div className='homeMainDiv'>
        <div className='headerDiv'>
          <img className='headerIcon' src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_spacepict10_1484336621-1.png" alt=""/>
          <h1 className='headerTitle'>Simple Joys</h1>
        </div>
        <div className='tabs'>
          <button className={`homeTab ${this.state.activeTab === 'family' ? 'familyActive' : 'family'}`} 
            onClick={() => this.updateActiveTab('family')}>Family</button>
          <button className={`homeTab ${this.state.activeTab === 'makeup' ? 'makeupActive' : (this.state.activeTab === 'family' ? 'makeupFamilyActive' : 'makeupFoodActive')}`} 
            onClick={() => this.updateActiveTab('makeup')}>Makeup</button>
          <button className={`homeTab ${this.state.activeTab === 'food' ? 'foodActive' : 'food'}`} 
            onClick={() => this.updateActiveTab('food')}>Food</button>
        </div>
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>Posts</h2>
              <input onChange={(e) => this.updateFilter(e.target.value)} className='filter' type="text" placeholder='search'/>
              <div className='showPosts'>
                <ShowPosts
                  showPostsArr={showPostsArr}
                  miniPostsList={miniPostsList}
                  postsMax={this.state.postsMax}
                  viewMore={this.state.viewMore}
                  updatePostShow={this.updatePostShow}
                />
                {!this.state.filter && tabSpecific.length > this.state.postsMax?
                  (!this.state.viewMore ? 
                    <button className='viewMoreBtn' onClick={() => this.setState({viewMore: true})}>View All</button> 
                    : <button className='viewMoreBtn' onClick={() => this.setState({viewMore: false})}>View Less</button>)
                      : <></>
                }
              </div>
            </div>
          </div>
          <div className='homeRight'>
            <h2 className='sectionTitle'>About Me</h2>
            <div className='miniPhoto' alt="" style={{backgroundPosition: 'center top', backgroundSize: 'cover', width: '150px', height: '150px',
              backgroundImage: `url('https://lh3.googleusercontent.com/hU-u-15dtt_-0YpdFrNXA6TtUluY1q83v1osN0cpQUDIdbdQcJswgO8y8NK52ejN1k5yOU_AoGuJEsm8iWDuSS2QI5J1wcSQ3zenDK_qx9FpCNayLiJiekMz6-CkiYC4ZSF7rf-JIqI4sn4NoAYUVdY_eiWGYdP-3k1pbow1iSAtFXbgoH9MjpRimUyxuXBaq47YGoZxe8bvgAwEVwHD2qU7Ab6G7ONtfubu5KaH25T-EPX3o5x8oXYxfsGQClNLoc7YqlNVvyYb2IEbbOE3rAzAOjSdKTUuA2Bo22a6fpZBXhVrJ5ODHVAqVEqoz6EZQFc1B5zY4mWjn1YSYAlts9A5vniDxaQfGyZfEDWMJj1_Rwj2r6fEPcEd7utGQuOHdG-mj-jDtSnSFCUH2t1fkslNryjHd3igMrPxPF-TPsdMlX0xAqgqim0Tpc19AfrwkBJJe6FX7a6i4qqrdLBkKMnQGNs05WVl8KfLMv9r2wCrBAdhftWOhJw_PAm-TQUIxFIM9dw2zq_NBkIxWIZEqgTE-tlIV703v_1O7bjR1e-OBxfJ6wwXEU3N6ShUMpVZWBz3-hbHRjA3KSCt8V40-LQaV-CdzV2PepcMG0kzvbn1O_DjUmSqPyqNz7OMdWMCirlZaOV0WcTp8McSeqSeUos164m3fhgj=w1734-h867-no')`}}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {posts} = state
  return {
    posts
  }
}

const mapDispatchToProps = {
  updatePosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)