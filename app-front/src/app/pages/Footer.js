import React from "react";

function Footer() {
  return (
    <div className="px-32 pt-28  ">
      <div className="border-t border-light grid grid-cols-1 md:grid-cols-4 pt-3 ">
        <div className="space-y-4 text-xs pb-2">
          <h5 className="font-bold">About</h5>
          <p className=" hover:underline">How TuniTip Works</p>
          <p className=" hover:underline">Investors</p>
          <p className=" hover:underline">Careers</p>
        </div>
        <div className="space-y-4 text-xs pb-2">
          <h5 className="font-bold">Hosting</h5>
          <p className=" hover:underline">Visit our community forum</p>
          <p className=" hover:underline">Explore hosting resources</p>
          <p className=" hover:underline">TuniTip Cover</p>
        </div>
        <div className="space-y-4 text-xs pb-2">
          <h5 className="font-bold">Community</h5>
          <p className=" hover:underline">Services</p>
          <p className=" hover:underline">Newsletters</p>
        </div>
        <div className="space-y-4 text-xs pb-2">
          <h5 className="font-bold">Support</h5>
          <p className=" hover:underline">Help Center</p>
          <p className=" hover:underline">Safety Information</p>
          <p className=" hover:underline">Report</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
