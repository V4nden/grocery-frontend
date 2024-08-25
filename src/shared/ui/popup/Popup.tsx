import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import "./popup.scss";
import { FaX } from "react-icons/fa6";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions: { setState: Dispatch<SetStateAction<boolean>>; state: boolean };
};

const Popup = (props: Props) => {
  return (
    <AnimatePresence mode="wait">
      {props.actions.state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"popup"}
          className="popup__bg"
          onClick={(e) => {
            e.target == e.currentTarget && props.actions.setState(false);
          }}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: [0, 1, 0, 1] }}
            className="popup"
          >
            <div className="popup__header">
              <h1 className="popup__header__title">{props.title}</h1>
              <button
                onClick={(e) => {
                  props.actions.setState(false);
                }}
                className="popup__header__close"
              >
                <FaX />
              </button>
            </div>
            <div
              className={`popup__content${
                props.className && ` ${props.className}`
              }`}
            >
              {props.children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
