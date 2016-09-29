import React from 'react';
require('./board.css');

class GameBoard extends React.Component {
	constructor() {
	  super();
		this.state = {
			currentTurn: '×',
			board: Array.from({length: 9}, x => ''),
      winner: null,
		};

		this.renderSquare = this.renderSquare.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleClick(id) {
		const { currentTurn, board, winner } = this.state;

    if (board[id] || winner) {
      return;
    }

		const newTurn = currentTurn === '×' ? '○' : '×';
		const newBoard = Array.from(board);
		newBoard[id] = currentTurn;

		this.setState({
			currentTurn: newTurn,
			board: newBoard,
      winner: this.getWinner(newBoard, currentTurn),
		});
	}

	handleReset() {
	  this.setState({
      currentTurn: '×',
      board: Array.from({length: 9}, x => ''),
      winner: null,
    });
  }

  getWinner(board, currentTurn) {
    // Terribly naive for demo purposes
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const win = winningCombos.find(c => {
      return (
        board[c[0]] !== "" &&
        board[c[1]] !== "" &&
        board[c[2]] !== "" &&
        board[c[0]] === board[c[1]] &&
        board[c[1]] === board[c[2]]
      );
    });

    return win ? currentTurn : null;
  }

  renderSquare(value, id) {
 		return (
 			<div
 				className={`square ${value === '×' ? 'square-x' : 'square-o'}`}
 				key={id}
 				onClick={this.handleClick.bind(this, id)}
 			>
 				{value}
 			</div>
 		);
 	}

  renderGameStatus() {
    const { currentTurn, winner } = this.state;
    if (winner) {
      return `Player ${winner} WON!`;
    } else {
      return `It's player ${currentTurn}'s turn`;
    }
  }

	render() {
		return(
	    <div className="board-container">
        <button
          className="btn-reset"
          onClick={this.handleReset}
        >
          ↺
        </button>
        <span className="game-status">
          {this.renderGameStatus()}
        </span>

        <div className="board">
          {this.state.board.map(this.renderSquare)}
        </div>
      </div>
		);
	}
}

export default GameBoard;
