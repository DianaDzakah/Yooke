import React from 'react'
import styles from "./index.module.css"

const Wallet = () => {
  return (
    <>
    <h3 className={styles.heading}>Porte-monnaie</h3>
    <div>
    <p>Montant disponible</p>
    <p>800 FCFA</p>
    <button>Recharger</button>
    </div>
    <p>Liste des Transactions</p>

    </>
  )
}

export default Wallet