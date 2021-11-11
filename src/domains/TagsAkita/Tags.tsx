import * as React from 'react';
import { ITag, tagsQuery, tagsService } from './state';
import { untilDestroyed } from 'helpers/take-until';
import Input from 'components/InputText'
import * as s from './styles'
// import { Books } from './Book';

export default class TagsPageComponent extends React.PureComponent {
  state: { tags: ITag[]; loading: boolean } = { tags: [], loading: true };

  componentDidMount() {
    tagsQuery.selectAll()
      .pipe(untilDestroyed(this))
      .subscribe(tags => this.setState({ tags }));

    tagsQuery.selectLoading()
      .pipe(untilDestroyed(this))
      .subscribe(loading => this.setState({ loading }));
  }

  render() {
    const isLoading = this.state.loading;
    let view;
    if( isLoading ) {
      view = <h1>Loading Tags...</h1>
    } else {
      view = <>
      <div className="panel">
        <h2>Tags</h2>
        <hr></hr>
        <s.TagContent>
          {this.state.tags?.map((tag) => (
            <s.Tag
              key={tag.id}
              onClick={() => console.log('event click')}
            >
              {tag.text}
            </s.Tag>
          ))}
        </s.TagContent>
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
