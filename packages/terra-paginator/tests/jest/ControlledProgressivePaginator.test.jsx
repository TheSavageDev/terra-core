import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ControlledProgressivePaginator from '../../src/ControlledProgressivePaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  // Snapshot Tests
  it('should render a Controlled ProgressivePaginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a Controlled ProgressivePaginator - Large', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {defaultRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
