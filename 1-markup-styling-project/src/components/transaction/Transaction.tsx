"use client";

export { useState } from "react";
import Image from "next/image";
// import React from "react";

import { transactions } from "./Transactions";

export default function Transaction() {
  return (
    <div className="mt-5 ml-4">
      <div className="flex">
        <h2 className="font-width-114 font-medium text-black text-16 whitespace-nowrap">
          Last Transaction
        </h2>
        <div className="flex ml-auto mr-4">
          <h2 className="font-width-101 font-normal text-gray-low text-12 whitespace-nowrap ml-0.5">
            See All Transactions
          </h2>
          <Image
            src="./chevron-right.svg"
            width="12"
            height="12"
            alt="logo less than"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-5.25">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex ">
            <div className="flex flex-row">
              <Image
                src={transaction.logo}
                height="32"
                width="32"
                alt="picture"
              />
              <div className="flex flex-col whitespace-nowrap ml-1.5">
                <div className="w-5">
                  <h2 className="text-15 font-normal">{transaction.company}</h2>
                  <h2 className="text-10 font-normal">
                    {transaction.abbreviation}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex ml-20 justify-center items-center">
              <h2 className="text-Number font-normal">
                {transaction.totalReturn}
              </h2>
            </div>
            <div className="flex flex-col whitespace-nowrap ml-auto mr-4">
              <h2 className="text-15 text-green-completed font-width-70 font-normal">
                {transaction.task}
              </h2>
              <h2 className="text-10 font-width-56 font-normal">
                {transaction.data}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
