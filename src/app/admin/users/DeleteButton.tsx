"use client"
import React from 'react'

const DeleteButton = ({action,userId}:{action:(e:FormData)=>void,userId:string}) => {
  return (
    <form
    action={(e) => {
      const sure = confirm(
        "Are you sure you want to delete this Data?"
      );
      if (sure) {
        action(e);
      }
    }}
  >
    <input type="hidden" name="userId" value={userId} />
    <button
      type="submit"
      className=" hover:bg-red-700 border border-black font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  </form>
  )
}

export default DeleteButton