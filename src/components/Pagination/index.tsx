import React, { useState, Children, useEffect } from 'react';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import _ from 'lodash';

import './styles.scss';

interface PaginationProps {
    pageSize: number;
    numbered?: boolean;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    pageSize,
    numbered = false,
    children,
    className,
}) => {
    const [childrenArray, setChildrenArray] = useState(
        Children.toArray(children)
    );

    const [currentPage, setCurrentPage] = useState(0);
    const [currentPageData, setCurrentPageData] = useState(
        childrenArray.slice(0, pageSize)
    );
    const [pageCount, setPageCount] = useState(
        Math.trunc(childrenArray.length / pageSize) + 1
    );

    const updateChildren = (newChildren: React.ReactNode) => {
        const newChildrenArray = Children.toArray(newChildren);
        setChildrenArray(newChildrenArray);
        setCurrentPage(0);
        setPageCount(Math.floor(newChildrenArray.length / pageSize) + 1);
        setCurrentPageData(
            newChildrenArray.slice(
                0,
                Math.min(pageSize, newChildrenArray.length)
            )
        );
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

    return (
        <div className={'pagination'} id="pagination">
            <div className={`pagination-page ${className}`}>
                {currentPageData}
            </div>
            {pageCount > 1 ? (
                <div className="pagination-nav">
                    {_.times(pageCount, (index) => (
                        <div
                            key={index}
                            className={classnames(
                                'pagination-nav-element',
                                { numbered: numbered },
                                {
                                    'current-page': currentPage === index,
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
            ) : (
                <div className="pagination-nav-spacer" />
            )}
        </div>
    );
};

export default Pagination;
