/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import styles from './Login.module.scss';

export default function Login(props) {
  return (
    <div className={cn('login', styles.block, styles.block_layout)}>
      <div className={cn(styles.content_box, styles.content_box_layout)}>
        <div className={cn(styles.content_box_item)}>
          <div
            style={{ '--src': `url(${require('assets/3a9ce3740753efac9eca7d1ab5c32bd4.png').default})` }}
            className={cn(styles.image, styles.image_layout)}
          />
        </div>
        <div className={cn(styles.content_box_spacer)} />
        <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>{'Club'}</h1>
        <div className={cn(styles.content_box_spacer1)} />
        <div className={cn(styles.content_box_item1)}>
          <div
            style={{ '--src': `url(${require('assets/c78e4f809d9573469953a6fae11820a3.png').default})` }}
            className={cn(styles.icon, styles.icon_layout)}
          />
        </div>
      </div>

      <div
        style={{ '--src': `url(${require('assets/a5a375fb7ec50662239a5a3c9009600a.png').default})` }}
        className={cn(styles.cover_block2, styles.cover_block2_layout)}>
        <div
          style={{ '--src': `url(${require('assets/c7931788b13c96d1442b2bc409f0e219.png').default})` }}
          className={cn(styles.image1, styles.image1_layout)}
        />
        <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>{'Identifiant'}</h3>

        <div
          style={{ '--src': `url(${require('assets/65d18a151d8da8a22fd1f806f8984be6.png').default})` }}
          className={cn(styles.cover_block1, styles.cover_block1_layout)}>
          <h3 className={cn(styles.subtitle1_box, styles.subtitle1_box_layout)}>
            <pre className={cn(styles.subtitle1)}>{'   michelle.rivera@example.com'}</pre>
          </h3>
          <h3 className={cn(styles.subtitle, styles.subtitle_layout1)}>{'Mot de passe'}</h3>
          <h3 className={cn(styles.subtitle, styles.subtitle_layout2)}>{'******************'}</h3>
        </div>

        <div className={cn(styles.cover_block, styles.cover_block_layout)}>
          <h1 className={cn(styles.big_title, styles.big_title_layout)}>{'Se connecter'}</h1>
        </div>
      </div>
    </div>
  );
}

Login.inStorybook = true;
