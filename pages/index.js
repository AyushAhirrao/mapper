import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'

export default function Home() {
  return (

    <div id={styles.container}>
      <div id={styles.leftPanel}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoTitle}>
            <h2>User Info</h2>
          </div>
          <div className={styles.userInfoForm}>
            <div className={styles.userFormAccountNo}>
              <label htmlFor="uAccountNo">Account: </label>
              <input type="text" name="uAccountNo" id="uAccountNo" />
            </div>
            <div className={styles.userFormName}>
              <label htmlFor="uName">Name: </label>
              <input type="text" name="uName" id="uName" />
            </div>
            <div className={styles.userFormEmail}>
              <label htmlFor="uEmail">Email: </label>
              <input type="email" name="uEmail" id="uEmail" />
            </div>
            <div className={styles.userFormPhone}>
              <label htmlFor="uPhone">Contact: </label>
              <input type="text" name="uPhone" id="uPhone" />
            </div>
          </div>

        </div>
        <div className={styles.transactionInfo}>
          <div className={styles.transactionInfoHeading}>
            <h2>Transaction Type</h2>
          </div>
          <div className={styles.typeCash}>
            <div className={styles.typeCashTitle}>
              <h3>Withdraw Cash</h3>
            </div>
            <div className={styles.cashAmount}>
              <label htmlFor="cAmount">Amount</label>
              <input type="text" name="cAmount" id="cAmount" />
            </div>
            {/* <div className={styles.noteTypes}>type of notes received</div> */}
            <div className={styles.proceedBtn}>
              <button>Proceed</button>
            </div>
          </div>
          <div className={styles.typeTransfer}>
            <div className={styles.typeTransferTitle}>
              <h3>Transfer amount</h3>
            </div>
            <div className={styles.transferInput}>
              <label htmlFor="tReceiversAccount">Receivers account:</label>
              <input type="text" name="tReceiversAccount" id="tReceiversAccount" />
            </div>
            <div className={styles.userFormName}>
              <label htmlFor="tReceiversName">Name: </label>
              <input type="text" name="tReceiversName" id="tReceiversName" />
            </div>
            <div className={styles.userFormEmail}>
              <label htmlFor="tReceiversEmail">Email: </label>
              <input type="email" name="tReceiversEmail" id="tReceiversEmail" />
            </div>
            <div className={styles.userFormPhone}>
              <label htmlFor="tReceiversPhone">Contact: </label>
              <input type="text" name="tReceiversPhone" id="tReceiversPhone" />
            </div>
            <div className={styles.transferInput}>
              <label htmlFor="tAmount">Amount</label>
              <input type="text" name="tAmount" id="tAmount" />
            </div>
            <div className={styles.proceedBtn}>
              <button>Proceed</button>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.mainMapBody}>
        <input placeholder='Search' id={styles.mainMapBodySearch} type="text" />
      </div>

      <div id={styles.rightPanel}>
        <div className={styles.RightPanelHeading}>
          <h1>Deposit</h1>
          <div className={styles.form}>

          </div>
        </div>
      </div>


    </div >

  )



}
