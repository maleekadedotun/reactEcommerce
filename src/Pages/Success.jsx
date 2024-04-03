import React from 'react'

function Payment() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "40vh",
      }}>
      <button
       style={{
        border: "none",
        width: 120,
        padding: "20px",
        borderRadius: 5,
        backgroundColor: "green",
        color: "white",
        fontWeight: 800,
        cursor: "pointer",
        margin: "auto",
       }}>
        Success
      </button>
      <h3 style={{
        width: 400,
        flexWrap: "wrap",
        marginTop: 10,


        }}>
        Your order is been prepared. Thanks for choosing Lama Shop.
      </h3>
    </div>
  )
}

export default Payment
