import React from 'react';
    import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
    import './Console.css';

    const initialFeeds = Array.from({ length: 8 }, (_, index) => ({
      id: `feed-${index + 1}`,
      content: `Feed ${index + 1}`,
    }));

    function Console() {
      const [feeds, setFeeds] = React.useState(initialFeeds);

      const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedFeeds = Array.from(feeds);
        const [removed] = reorderedFeeds.splice(result.source.index, 1);
        reorderedFeeds.splice(result.destination.index, 0, removed);

        setFeeds(reorderedFeeds);
      };

      return (
        <div className="console">
          <h2>StreamPilot Console</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="feeds" direction="horizontal">
              {(provided) => (
                <div
                  className="feed-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {feeds.map((feed, index) => (
                    <Draggable key={feed.id} draggableId={feed.id} index={index}>
                      {(provided) => (
                        <div
                          className="feed"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {feed.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      );
    }

    export default Console;
