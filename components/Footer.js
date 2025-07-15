import Logo from './Logo.js'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-center space-y-4">
      <Logo width={80} height={80} />

      {/* 고객센터 */}
      <div className="text-lg">고객센터: 000-000-0000</div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 flex justify-center">
        COPYRIGHT ⓒ HAPPY MOTORS COMPANY. ALL RIGHTS RESERVED.
      </div>
    </div>
    </footer>
  );
}
