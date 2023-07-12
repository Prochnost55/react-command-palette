import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { navlinks } from '../../constants/navlinks';
import { Link } from 'react-router-dom';
import SearchSVG from '../../icons/Search';

const CommandPallete = (props) => {
  const { showCommandPallete, toggleCommandPallete } = props;
  const outer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOuterClick = (e) => {
    if (outer && e.target === outer.current) {
      toggleCommandPallete(false);
    }
  };

  useEffect(() => {
    if (showCommandPallete) {
      inputRef.current.focus();
    }
  }, [showCommandPallete]);
  return (
    <div
      className={`command-pallete-container ${
        showCommandPallete ? 'vis' : 'n-vis'
      }`}
      onClick={handleOuterClick}
      ref={outer}
    >
      <div className={'command-pallete'}>
        <label className={'input-label'}>
          <SearchSVG className={'input-svg'} />
          <input
            className={'input'}
            placeholder={'Search for your destination page'}
            ref={inputRef}
          />
        </label>
        <div className={'suggestion-list'}>
          {navlinks.map((navlink, id) => {
            return (
              <div className={'suggestion-list-item'} key={'navlink-' + id}>
                <Link to={navlink.link} onClick={toggleCommandPallete}>
                  <>
                    {<navlink.icon className={'suggestion-list-item-svg'} />}
                    <span className={'suggestion-list-item-name'}>
                      {navlink.name}
                    </span>
                  </>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommandPallete;
