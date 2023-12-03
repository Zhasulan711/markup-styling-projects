"use client";

export { useState } from "react";
// import React from "react";

import { companies } from "./Companies";

export default function Company() {
  return (
    <div className="absolute flex flex-row space-x-10 flex-nowrap pt-4 pl-4">
      {companies.map((company, index) => (
        <div key={index} className="">
          <div className="flex flex-row " key={index}>
            <img
              src={company.logo}
              alt={`${company.company} logo`}
              className="pt-1"
            />
            <h3 className="pt-2 pl-2 text-white">{company.company}</h3>
            <img
              src={company.chart}
              alt={`${company.chart} chart`}
              className="pl-13.75 "
            />
          </div>
          <div className="whitespace-nowrap flex flex-column space-y-2.5 pt-4">
            <ul>
              <li className="font-normal text-gray-dark flex justify-between flex-nowrap">
                Total shares
                <span className="pl-13.75 text-white">
                  {company.totalShares}
                </span>
              </li>
              <li className="font-normal text-gray-dark flex justify-between flex-nowrap pt-2.5">
                Total return
                {parseFloat(company.totalReturn) > 0 ? (
                  <span className="text-green-start pl-13.75">
                    {company.totalReturn}
                  </span>
                ) : (
                  <span className="text-red-stop pl-13.75">
                    {company.totalReturn}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
