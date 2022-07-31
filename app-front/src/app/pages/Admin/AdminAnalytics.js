import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userList } from "../../actions/auth.actions";
import { UserIcon } from "@heroicons/react/solid";
import { FolderIcon } from "@heroicons/react/solid";
import { ClipboardListIcon } from "@heroicons/react/solid";

function AdminAnalytics({ authState, userList, categoryState, tipState }) {
  useEffect(() => {
    userList();
  }, [userList]);
  return (
    <>
      <div className="grid grid-cols-3 p-5 gap-24 px-52 ">
        <div className="flex space-x-28  bg-purple h-28  w-60 rounded-xl cursor-pointer pt-9 ">
          <div className="px-5 text-grayDark">
            {authState.users.length}
            <div className="text-sm italic">users</div>
          </div>
          <div className="w-10 text-grayDark">
            <UserIcon />
          </div>
        </div>

        <div className="flex space-x-28  bg-blue h-28  w-60 rounded-xl cursor-pointer pt-9 ">
          <div className="px-3 text-grayDark">
            {categoryState.categories?.length}
            <div className="text-sm italic">categories</div>
          </div>
          <div className=" w-10 text-grayDark">
            <FolderIcon />
          </div>
        </div>
        <div className="flex space-x-28  bg-pink h-28  w-60 rounded-xl cursor-pointer pt-9 ">
          <div className="px-5 text-grayDark">
            {tipState.tips?.length}
            <div className="text-sm italic">trips</div>
          </div>
          <div className="w-10 text-grayDark">
            <ClipboardListIcon />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.authState,
  tipState: state.tipState,
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  userList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAnalytics);
