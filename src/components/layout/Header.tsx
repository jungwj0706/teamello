"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo.svg"
              alt="Teamello"
              width={140}
              height={140}
            />
          </Link>
        </div>

        <nav className="flex items-center gap-12 flex-1 justify-center">
          <a
            href="#features"
            className="text-[15px] text-gray-700 hover:text-gray-900"
          >
            기능
          </a>
          <a
            href="#process"
            className="text-[15px] text-gray-700 hover:text-gray-900"
          >
            프로세스
          </a>
          <a
            href="#reviews"
            className="text-[15px] text-gray-700 hover:text-gray-900"
          >
            후기
          </a>
        </nav>

        <div className="flex-1 flex justify-end items-center gap-12">
          <button className="text-[15px] text-gray-700 hover:text-gray-900">
            로그인
          </button>
          <Button>회원가입</Button>
        </div>
      </div>
    </header>
  );
}
