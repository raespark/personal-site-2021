import React, { useState, Children, useEffect } from 'react';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import _ from 'lodash';

import './styles.scss';

interface PaginationProps {
    pageSize: number;
    startingPage?: number;
    numbered?: boolean;
    arrows?: boolean;
    nav?: boolean;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    pageSize,
    startingPage = 0,
    numbered = false,
    arrows = false,
    nav = true,
    children,
    className,
}) => {
    const [childrenArray, setChildrenArray] = useState(
        Children.toArray(children)
    );

    const [currentPage, setCurrentPage] = useState(startingPage);
    const [currentPageData, setCurrentPageData] = useState(
        childrenArray.slice(
            startingPage * pageSize,
            Math.min(startingPage * pageSize + pageSize, childrenArray.length)
        )
    );
    const [pageCount, setPageCount] = useState(
        Math.trunc(childrenArray.length / pageSize) + 1
    );

    const updateChildren = (newChildren: React.ReactNode) => {
        const newChildrenArray = Children.toArray(newChildren);
        setChildrenArray(newChildrenArray);
        changePage(startingPage);
        setPageCount(Math.ceil(newChildrenArray.length / pageSize));
    };

    useEffect(() => {
        updateChildren(children);
    }, [children]);

    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const pageOffset = pageNumber * pageSize;
        setCurrentPageData(
            childrenArray.slice(
                pageOffset,
                Math.min(pageOffset + pageSize, childrenArray.length)
            )
        );
    };

    const advancePages = () => {
        if (currentPage + 1 < pageCount) {
            changePage(currentPage + 1);
        } else {
            changePage(0);
        }
    };

    const reversePages = () => {
        if (currentPage > 0) {
            changePage(currentPage - 1);
        } else {
            changePage(pageCount - 1);
        }
    };

    return (
        <div className="pagination" id="pagination">
            {arrows && (
                <div
                    className="pagination-arrow left-arrow"
                    onClick={reversePages}
                >
                    <div className="pagination-arrow-symbol">{'<'}</div>
                </div>
            )}
            <div className={`pagination-page ${className}`}>
                {currentPageData}
            </div>
            {arrows && (
                <div
                    className="pagination-arrow right-arrow"
                    onClick={advancePages}
                >
                    <div className="pagination-arrow-symbol">{'>'}</div>
                </div>
            )}
            {pageCount > 1 ? (
                <>
                    {nav && (
                        <div className="pagination-nav">
                            {_.times(pageCount, (index) => (
                                <div
                                    key={index}
                                    className={classnames(
                                        'pagination-nav-element',
                                        { numbered: numbered },
                                        {
                                            'current-page':
                                                currentPage === index,
                                        }
                                    )}
                                    onClick={() => {
                                        if (!(currentPage === index)) {
                                            changePage(index);
                                            if (isMobile) {
                                                const paginationElement = document.getElementById(
                                                    'pagination'
                                                );
                                                const pageLocation =
                                                    paginationElement.getBoundingClientRect()
                                                        .top +
                                                    window.pageYOffset -
                                                    150;
                                                window.scrollTo({
                                                    top: pageLocation,
                                                    behavior: 'smooth',
                                                });
                                            }
                                        }
                                    }}
                                >
                                    {numbered ? `${index + 1}` : '•'}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className="pagination-nav-spacer" />
            )}
        </div>
    );
};

export default Pagination;
