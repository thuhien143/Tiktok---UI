import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/363354857_3344273902550150_5258645824125206791_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mn0nK_KTPj8Q7kNvgFGjipQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan5-10.fna&oh=00_AYD2wc5OksCj58yagKzAdWWXWmAZgy_OD6_IBTN_rJUM1w&oe=664BA9BB"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ntthien</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Thi Thu Hien</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
