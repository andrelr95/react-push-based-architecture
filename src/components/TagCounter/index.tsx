import { useTagsFacade } from 'domains/tags/hooks/tags.hook'
import { ITag, tagsQuery, tagsService } from 'domains/TagsAkita/state';
import { untilDestroyed } from 'helpers/take-until';
import React from 'react'

export default class TagsPageCounter extends React.PureComponent {
  state: { tags: ITag[]; loading: boolean } = { tags: [], loading: true };

  componentDidMount() {
    tagsQuery.selectAll()
      .pipe(untilDestroyed(this))
      .subscribe(tags => this.setState({ tags }));

    tagsQuery.selectLoading()
      .pipe(untilDestroyed(this))
      .subscribe(loading => this.setState({ loading }));

      tagsService.fetch();
  }

  render() {
    const isLoading = this.state.loading;
    let view;
    if( isLoading ) {
      view = <h1>Loading Tags...</h1>
    } else {
      view = <>
        <div>
        <span>Total de {this.state.tags.length} tags!</span>
      </div>
    </>;
    }

    return (
      <React.Fragment>
        {view}
      </React.Fragment>
    );
  }
}
